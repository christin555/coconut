import {action, autorun, computed, makeObservable, toJS, observable} from 'mobx';
import API from "./../utils/API";

class DocumentStore {

    documents=[];
    document={};
    status='';

    constructor() {
        makeObservable(this, {
            documents: observable,
            status: observable,
            setDocuments: action.bound,
            document: observable,
            setDocument: action.bound,
            setField: action.bound,
            setStatusSuccess: action.bound,
        })
    }
    setStatusSuccess(){
        this.status = 'success';
    }
    setField(field, value){
        this.document[field] = value;
    }
    setDocuments(documents){
        this.documents = documents;
    }
    setDocument(document){
        console.log(document);
        this.document = document;
    }

    getDocuments = async(id) => {
        const res =  await API.get('documents', {params: {
            "eventId": id
        }});
        this.setDocuments(res.data);
    }
    getDocument = async(id) => {
        const res =  await API.get(`document/${id}`,);
        this.setDocument(res.data);
    }
    editDocument = async() => {
        const body = this.document;
        const res =  await API.put('document', body);
        this.setDocument(res.data);
    }
    create = async() => {
        const body = toJS(this.document);
        console.log(body);
        const res =  await API.post('document', body);
        this.setDocument(res.data);
        this.setStatusSuccess();
    }
}


export default DocumentStore;

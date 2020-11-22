import Button from "@material-ui/core/Button";
import React from "react";
import UserImg from "../../assets/img/user.jpg";

const UpWidget = ({funcUpload, funcDelete, photoPath}) => {
    const showWidget = () => {

        let widget = window.cloudinary.createUploadWidget(
            {
                cloudName: `dornsj9yh`,
                uploadPreset: `ksxs3udh`
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    funcUpload(result.info.url);
                }
            });
        widget.open();
    }
    return(
       <React.Fragment>
           <img src={photoPath || UserImg} />
           <Button
               size="small"
               variant="contained"
               color="primary"
               onClick={showWidget}
           >
               Upload
           </Button>
           <Button
               size="small"
               variant="contained"
               color="primary"
               onClick={funcDelete}
           > Delete
           </Button>
       </React.Fragment>
    )
};

export default UpWidget;

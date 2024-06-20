import React from "react";
import "./Customers.scss";
import {
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const AddDataModal = ({ onClose }) => {
 
  return (
    <div className="add-data-modal popup">
      <div className="color">
        <div style={{ padding: 20, backgroundColor: "white" }}>
          <Typography variant="h6">Create Attributes</Typography>
          <TextField
            label="Attribute Name"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Attribute Description"
            variant="standard"
            margin="normal"
            fullWidth
          />
          <TextField
            select
            label="Field Type"
            variant="standard"
            margin="normal"
            fullWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
          <Button
            onClick={onClose}
            variant="contained"
            color="primary"
            style={{ marginRight: 10 }}
          >
            Create
          </Button>
          <Button onClick={onClose} variant="contained">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddDataModal;

import React, { useState } from "react";
import {
  Autocomplete,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "../styles/form.scss";
import {
  FileUpload,
  ImageUpload,
  SignatureUpload,
  branches,
  countries,
} from "./LoanRequestForm";
import { TProductType } from "./AccountOpening";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Personal Information",
  "Contact Information",
  "Financial Information",
  "Document Uploads",
];
// "Additional Details",

export interface IAccountOpeningFormProps {
  productType: TProductType;
}

interface FormItem {
  fullName: string;
  surname: string;
  motherName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  occupation: string;
  initialDeposit: number;
  monthlyIncome: number;
  sex: string;
  confirm: boolean;
  // add other properties as needed
}

export function AccountOpeningWizardForm(props: IAccountOpeningFormProps) {
  // State to track the current step
  const [activeStep, setActiveStep] = useState(0);

  // State to store form data
  const [formData, setFormData] = useState<FormItem>({
    fullName: "",
    surname: "",
    motherName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    occupation: "",
    initialDeposit: 0,
    monthlyIncome: 0,
    confirm: false,
    sex: "",
    // ... add other form fields here
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [passport, setPassport] = useState<File | null>(null);
  const [residentCard, setResidentCard] = useState<File | null>(null);
  const [signature, setSignature] = useState<File | null>(null);
  const [confirm, setConfirm] = useState<File | null>(null);

  // State to track form completion status for each step
  const [completedSteps, setCompletedSteps] = useState<Array<boolean>>(
    Array(steps.length).fill(false)
  );

  // Function to handle form data change

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Function to handle next step
  const handleNext = () => {
    // Validate the current step's form fields before moving to the next step
    if (validateStep(activeStep)) {
    }
    setCompletedSteps((prevCompletedSteps) => {
      const newCompletedSteps = [...prevCompletedSteps];
      newCompletedSteps[activeStep] = true;
      return newCompletedSteps;
    });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Function to handle previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to handle form submission (you can implement your submission logic here)
  const handleSubmit = () => {
    // Validate the last step before submission
    if (validateStep(activeStep)) {
      // Add your form submission logic here
      console.log("Form submitted!", formData);
    }
  };

  // Function to validate the form fields for the current step
  const validateStep = (step: number): boolean => {
    console.log("data:", formData);
    console.log(photo);
    console.log(passport);
    console.log(confirm);
    console.log(residentCard);
    console.log(signature);

    // Implement your validation logic here
    switch (step) {
      case 0:
        // Validate personal information fields
        return (
          formData.fullName !== "" &&
          formData.surname !== "" &&
          formData.phone !== "" &&
          formData.email !== "" &&
          formData.confirm !== false
        );
      case 1:
        // Validate contact information fields
        return (
          formData.motherName !== "" &&
          formData.streetAddress !== "" &&
          formData.city !== "" &&
          formData.state !== "" &&
          formData.zipCode !== "" &&
          formData.country !== ""
        );
      case 2:
        // Validate financial information fields
        return (
          formData.occupation !== "" &&
          Number(formData.initialDeposit) > 0 &&
          Number(formData.monthlyIncome) > 0
        );
      // Add validation logic for other steps similarly
      default:
        return true;
    }
  };

  return (
    <form className="loan-form-container" id="Loan_Request">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} style={{ marginBottom: 25 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completedSteps[index]}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            {activeStep === 0 && (
              <Grid container xs={12} rowSpacing={4}>
                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="text-1"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-text-1_651becd154b31-label"
                        >
                          Full Name <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="text-1"
                          placeholder="Your Full Name"
                          id="form-field-text-1_651becd154b31"
                          className="form-input form-name--field"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          data-required="1"
                          required
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Surname <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name-4"
                          placeholder="Your Surname"
                          id="form-field-name-4_651becd154b31"
                          className="form-input form-name--field"
                          aria-required="true"
                          value={formData.surname}
                          onChange={(e) =>
                            handleInputChange("surname", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="email-1"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-email-1_651becd154b31"
                          className="form-label"
                          id="form-field-email-1_651becd154b31-label"
                        >
                          Email Address <span className="form-required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email-1"
                          placeholder="E.g. abdi@yahoo.com"
                          id="form-field-email-1_651becd154b31"
                          className="form-input form-email--field"
                          data-required="1"
                          aria-required="true"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="phone-1"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-phone-1_651becd154b31"
                          className="form-label"
                          id="form-field-phone-1_651becd154b31-label"
                        >
                          Phone <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone-1"
                          placeholder="E.g. +1 300 400 5000"
                          id="form-field-phone-1_651becd154b31"
                          className="form-input form-field--phone"
                          data-required="1"
                          aria-required="true"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <div className="form-field">
                    <label
                      lang="form-field-date-1-picker_651becd154b31"
                      className="form-label"
                      id="form-field-date-1-picker_651becd154b31-label"
                    >
                      Agreement <span className="form-required">*</span>
                    </label>
                    <div className="confirmation">
                      <input
                        type="checkbox"
                        name="checkbox-1[]"
                        // value="Yes"
                        // checked={formData.confirm}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirm: e.target.checked,
                          })
                        }
                        id="form-field-checkbox-1-1-651becd154b31"
                        aria-labelledby="form-field-checkbox-1-1-651becd154b31-label"
                        data-calculation="0"
                        aria-describedby="form-field-checkbox-1-651becd154b31-description"
                      />
                      <p>
                        Yes, I agree with the{" "}
                        <a
                          href="https://diaspora.coopbankoromia.com.et/agreement/"
                          target="_blank"
                        >
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://diaspora.coopbankoromia.com.et/agreement/"
                          target="_blank"
                        >
                          terms and conditions
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            )}
            {activeStep === 1 && (
              <Grid container xs={12} rowSpacing={4}>
                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="text-1"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-text-1_651becd154b31-label"
                        >
                          Mother's Name <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="text-1"
                          placeholder="Your Mother's Full Name"
                          id="form-field-text-1_651becd154b31"
                          className="form-input form-name--field"
                          data-required="1"
                          value={formData.motherName}
                          onChange={(e) =>
                            handleInputChange("motherName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Sex <span className="form-required">*</span>
                        </label>
                        <div className="sex">
                          <div>
                            <input
                              type="radio"
                              name="name-4"
                              value="Male"
                              checked={formData.sex === "Male"}
                              onChange={(e) =>
                                handleInputChange("sex", e.target.value)
                              }
                              required
                            />
                            <label>Male</label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="name-4"
                              value="Female"
                              checked={formData.sex === "Female"}
                              onChange={(e) =>
                                handleInputChange("sex", e.target.value)
                              }
                              required
                            />
                            <label>Female</label>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Street Address{" "}
                          <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name-4"
                          placeholder="Eg. 123 MD New Way"
                          id="form-field-name-4_651becd154b31"
                          className="form-input form-name--field"
                          aria-required="true"
                          value={formData.streetAddress}
                          onChange={(e) =>
                            handleInputChange("streetAddress", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Country
                        </label>
                        {/* <div className="select"> */}
                        <div className="">
                          {/* <select
                            name="address-1-country"
                            id="forminator-form-2333__field--address-1-country_6523b367d1783"
                            data-search="true"
                            data-placeholder="Select country"
                            data-default-value=""
                            data-select2-id="select2-data-forminator-form-2333__field--address-1-country_6523b367d1783"
                            aria-hidden="true"
                            value={formData.country}
                            onChange={(e) =>
                              handleInputChange("country", e.target.value)
                            }
                          >
                            <input type="text" name="count" id="count" />
                            {countries.map((country: any) => {
                              return <option value={country}>{country}</option>;
                            })}
                          </select> */}
                          <Autocomplete
                            // disablePortal
                            value={formData.country}
                            onChange={(e, newValue) =>
                              handleInputChange("country", newValue || "")
                            }
                            // id="combo-box-demo"
                            options={countries}
                            getOptionLabel={(option) => option} // Specify how options are displayed
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          {/* <span>
                            <i className="fas fa-chevron-down"></i>
                          </span> */}
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          State/Province
                        </label>
                        <input
                          type="text"
                          name="name-4"
                          placeholder="Eg. New South Wales"
                          id="form-field-name-4_651becd154b31"
                          className="form-input form-name--field"
                          aria-required="true"
                          value={formData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="text-1"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-text-1_651becd154b31-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="text-1"
                          placeholder="Eg. New York"
                          id="form-field-text-1_651becd154b31"
                          className="form-input form-name--field"
                          data-required="1"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="text-1"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-text-1_651becd154b31-label"
                        >
                          ZIP / Postal Code
                        </label>
                        <input
                          type="text"
                          name="text-1"
                          placeholder="Eg. 2000"
                          id="form-field-text-1_651becd154b31"
                          className="form-input form-name--field"
                          data-required="1"
                          value={formData.zipCode}
                          onChange={(e) =>
                            handleInputChange("zipCode", e.target.value)
                          }
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {activeStep === 2 && (
              <Grid container xs={12} rowSpacing={4}>
                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Occupation <span className="form-required">*</span>
                        </label>
                        <input
                          type="text"
                          name="name-4"
                          placeholder="Your Occupation"
                          id="form-field-name-4_651becd154b31"
                          className="form-input form-name--field"
                          aria-required="true"
                          value={formData.occupation}
                          onChange={(e) =>
                            handleInputChange("occupation", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="text-1"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-text-1_651becd154b31-label"
                        >
                          Initial Deposit{" "}
                          <span className="form-required">*</span>
                        </label>
                        {/* <input
                          type="number"
                          name="text-1"
                          placeholder="Eg. $100"
                          id="form-field-text-1_651becd154b31"
                          className="form-input form-name--field"
                          data-required="1"
                          required
                        /> */}
                        <FormControl fullWidth>
                          <OutlinedInput
                            type="number"
                            name="text-1"
                            placeholder="100"
                            id="form-field-text-1_651becd154b31"
                            className="form-input form-name--field"
                            data-required="1"
                            required
                            startAdornment={
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            }
                            value={formData.initialDeposit}
                            onChange={(e) =>
                              handleInputChange(
                                "initialDeposit",
                                e.target.value
                              )
                            }
                          />
                        </FormControl>
                        <div className="deposit-notice">
                          <span>
                            Minimum of 100 dollars should be on your Diaspora
                            Account in less than one month, otherwise your
                            account automatically be inactive
                          </span>
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field">
                        <label
                          className="form-label"
                          id="form-field-name-4_651becd154b31-label"
                        >
                          Monthly Income{" "}
                          <span className="form-required">*</span>
                        </label>
                        <input
                          type="number"
                          name="name-4"
                          placeholder="Your Monthly Income"
                          id="form-field-name-4_651becd154b31"
                          className="form-input form-name--field"
                          aria-required="true"
                          value={formData.monthlyIncome}
                          onChange={(e) =>
                            handleInputChange("monthlyIncome", e.target.value)
                          }
                          required
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {activeStep === 3 && (
              <Grid container xs={12} rowSpacing={4}>
                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="upload-2"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-upload-2_651becd154b31"
                          className="form-label"
                        >
                          Upload Photo <span className="form-required">*</span>
                        </label>
                        <div
                          className="file-upload-container"
                          data-element="upload-2_651becd154b31"
                          aria-describedby="form-field-upload-2_651becd154b31-description"
                        >
                          <ImageUpload
                            name="upload-2[]"
                            stateFunction={photo}
                            setStateFunction={setPhoto}
                          />
                        </div>
                        <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                      </div>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="upload-2"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-upload-2_651becd154b31"
                          className="form-label"
                        >
                          Upload Passport{" "}
                          <span className="form-required">*</span>
                        </label>
                        <div
                          className="file-upload-container"
                          data-element="upload-2_651becd154b31"
                          aria-describedby="form-field-upload-2_651becd154b31-description"
                        >
                          <FileUpload
                            name="upload-2[]"
                            stateFunction={passport}
                            setStateFunction={setPassport}
                          />
                        </div>
                        <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="upload-2"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-upload-2_651becd154b31"
                          className="form-label"
                        >
                          Residence card or yellow card{" "}
                          <span className="form-required">*</span>
                        </label>
                        <div
                          className="file-upload-container"
                          data-element="upload-2_651becd154b31"
                          aria-describedby="form-field-upload-2_651becd154b31-description"
                        >
                          <FileUpload
                            name="upload-2[]"
                            stateFunction={residentCard}
                            setStateFunction={setResidentCard}
                          />
                        </div>
                        <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      id="upload-2"
                      className="form-col form-col-4 "
                    >
                      <div className="form-field">
                        <label
                          lang="form-field-upload-2_651becd154b31"
                          className="form-label"
                        >
                          Upload Signature{" "}
                          <span className="form-required">*</span>
                        </label>
                        <div
                          className="file-upload-container"
                          data-element="upload-2_651becd154b31"
                          aria-describedby="form-field-upload-2_651becd154b31-description"
                        >
                          <SignatureUpload
                            name="upload-2[]"
                            stateFunction={signature}
                            setStateFunction={setSignature}
                          />
                        </div>
                        <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className="form-row">
                  <Grid item xs={6} sm={12} className="form-col form-col-4 ">
                    <div className="form-field">
                      <div className="download-doc">
                        <div className="image">
                          <img src="/images/document.svg"></img>
                        </div>
                        <div className="middle">
                          <div>
                            <h3>
                              <a>Confirmation Form</a>
                            </h3>
                          </div>
                          <div className="small-icons">
                            <div>
                              <i className="fas fa-copy"></i>
                              <span> 1 file(s) </span>
                            </div>
                            <div>
                              <i className="far fa-hdd"></i>
                              <span> 20 KB</span>
                            </div>
                          </div>
                        </div>
                        <div className={`btn ${props.productType}`}>
                          <a
                            href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fdiaspora.coopbankoromia.com.et%2Fwp-content%2Fuploads%2F2023%2F06%2FDiaspora-Banking.docx&wdOrigin=BROWSELINK"
                            target="_blank"
                          >
                            DOWNLOAD
                          </a>
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={5.5} sm={12} className="form-col form-col-4 ">
                    <div className="form-field">
                      <label
                        lang="form-field-upload-2_651becd154b31"
                        className="form-label"
                      >
                        Upload Confirmation file{" "}
                        <span className="form-required">*</span>
                      </label>
                      <div
                        className="file-upload-container"
                        data-element="upload-2_651becd154b31"
                        aria-describedby="form-field-upload-2_651becd154b31-description"
                      >
                        <FileUpload
                          name="upload-2[]"
                          stateFunction={confirm}
                          setStateFunction={setConfirm}
                        />
                      </div>
                      <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {activeStep === 4 && (
              <Grid container xs={12} rowSpacing={4}>
                {/* <Grid item xs={12} className="form-row">
                  <Grid container xs={12} columnSpacing={3} className="row1">
                    <Grid
                      item
                      xs={12}
                      id="name-4"
                      className="form-col form-col-6 "
                    >
                      <div className="form-field form-is_filled">
                        <label
                          lang="form-field-date-1-picker_651becd154b31"
                          className="form-label"
                          id="form-field-date-1-picker_651becd154b31-label"
                        >
                          Date <span className="form-required">*</span>
                        </label>
                        <div className="form-input-with-icon">
                          <label lang="form-field-date-1-picker_651becd154b31">
                            <span
                              className="form-icon-calendar"
                              aria-hidden="true"
                            ></span>
                          </label>
                          <input
                            type="date"
                            name="date-1"
                            className="date"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid> */}

                {/* <Grid item xs={12} className="form-row">
                  <div className="form-field">
                    <label
                      lang="form-field-date-1-picker_651becd154b31"
                      className="form-label"
                      id="form-field-date-1-picker_651becd154b31-label"
                    >
                      Confirmation <span className="form-required">*</span>
                    </label>
                    <div className="confirmation">
                      <input
                        type="checkbox"
                        name="checkbox-1[]"
                        value="Yes"
                        id="form-field-checkbox-1-1-651becd154b31"
                        aria-labelledby="form-field-checkbox-1-1-651becd154b31-label"
                        data-calculation="0"
                        aria-describedby="form-field-checkbox-1-651becd154b31-description"
                      />
                      <p>
                        I confirm that I do not have a diaspora account with any
                        other bank
                      </p>
                    </div>
                  </div>
                </Grid> */}

                {/* <Grid item xs={12} className="form-row">
                  <div className="form-field">
                    <label
                      lang="form-field-textarea-1_651becd154b31"
                      id="form-field-textarea-1_651becd154b31-label"
                      className="form-label"
                    >
                      Comment or message (optional)
                    </label>
                    <textarea
                      name="textarea-1"
                      placeholder=""
                      id="form-field-textarea-1_651becd154b31"
                      className="form-textarea"
                      style={{ minHeight: "70px" }}
                    ></textarea>
                  </div>
                </Grid> */}

                {/* <Grid item xs={12} className="form-row form-row-last">
                  <div className="form-field">
                    <button
                      className={`form-button form-button-submit ${props.productType}`}
                      type="submit"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </Grid> */}
              </Grid>
            )}
            {/* {activeStep === 5 && <Grid container xs={12} rowSpacing={4}></Grid>} */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </form>
  );
}

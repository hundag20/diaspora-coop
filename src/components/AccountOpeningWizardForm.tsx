import React, { useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import "../styles/form.scss";
import {
  FileUpload,
  ImageUpload,
  SignatureUpload,
  branches,
  currency,
  countries,
} from "./LoanRequestForm";
import { TProductType } from "./AccountOpening";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckCircle } from "@mui/icons-material";
import { ChooseAccount } from "../pages/ChooseAccount";
import ChooseAccountType from "./ChooseAccountType";

import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ConfirmFileUpload } from "./ConfirmForm";

const rootUrl = window.location.protocol + "//" + window.location.host;

const apiUrl = `${!rootUrl.includes('localhost')? `${rootUrl}/`:''}${process.env.REACT_APP_API_URL}`;
// const apiUrl = process.env.REACT_APP_API_URL;

const steps = [
  "Personal Information",
  "Contact Information",
  "Financial Information",
  "Document Uploads",
  "Choose account",
];

export interface IAccountOpeningFormProps {
  productType: TProductType;
  prevData: FormItem | null;
}

interface FormItem {
  id: number | null;
  accountType: number | null;
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
  initialDeposit: number | null;
  monthlyIncome: number | null;
  sex: string;
  confirm: boolean;
  branch: string;
  currency: number | null;
  stage: string;
  error: string | boolean;
  percentageCompleted: number;
  // add other properties as needed
}

const initialAccountState: FormItem = {
  id: null,
  accountType: null,
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
  initialDeposit: null,
  monthlyIncome: null,
  confirm: false,
  sex: "",
  branch: "",
  currency: 1,
  stage: "",
  error: false,
  percentageCompleted: 0,
};

export function AccountOpeningWizardForm(props: IAccountOpeningFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isNarrowScreen, setIsNarrowScreen] = useState(
    window.innerWidth <= 600
  );

  useEffect(() => {
    if (props.prevData !== null) {
      // console.log("oassed data:", props.prevData);

      setFormData(props.prevData);
    } else if (localStorage.getItem("coopaccountopeninginfo")) {
      const previousData =
        JSON.parse(localStorage.getItem("coopaccountopeninginfo") || "") ||
        initialAccountState;
      let newData: FormItem = {
        id: previousData.id,
        accountType: previousData.accountType,
        fullName: previousData.fullName,
        surname: previousData.surname,
        motherName: previousData.motherName,
        email: previousData.email,
        phone: previousData.phone,
        streetAddress: previousData.streetAddress,
        city: previousData.city,
        state: previousData.state,
        zipCode: previousData.zipCode,
        country: previousData.country,
        occupation: previousData.occupation,
        initialDeposit: previousData.initialDeposit,
        monthlyIncome: previousData.monthlyIncome,
        confirm: false,
        sex: previousData.sex,
        branch: previousData.branch,
        currency: previousData.currency,
        stage: previousData.stage,
        error: previousData.error,
        percentageCompleted: previousData.percentageCompleted,
      };
      setFormData(newData);
    }
  }, [props.prevData]);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // State to store form data
  const [formData, setFormData] = useState<FormItem>(initialAccountState);
  // State to track form field errors
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [photo, setPhoto] = useState<File | null>(null);
  const [passport, setPassport] = useState<File | null>(null);
  const [residentCard, setResidentCard] = useState<File | null>(null);
  const [signature, setSignature] = useState<File | null>(null);
  const [confirm, setConfirm] = useState<File | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [isVerified, setVerified] = useState<boolean>(false);

  const handleVerification = (response: any) => {
    // This function will be called when reCAPTCHA is successfully verified.
    if (response) {
      setVerified(true);
    }
  };
  // State to track form completion status for each step
  const [completedSteps, setCompletedSteps] = useState<Array<boolean>>(
    Array(steps.length).fill(false)
  );

  // Function to handle form data change
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const filterLetters = (input: string) => {
    // Allow only letters (uppercase and lowercase) and space using a regular expression
    return input.replace(/[^a-zA-Z\s]/g, "");
  };

  const handleLetterChange = (
    fieldName: string,
    event: { target: { value: string } }
  ) => {
    const filteredValue = filterLetters(event.target.value);
    handleInputChange(fieldName, filteredValue);
  };

  // Function to handle form data change
  const handleErrorChange = () => {
    setFormData({ ...formData, error: false });
  };

  // Function to handle next step
  const handleNext = () => {
    // Validate the current step's form fields before moving to the next step
    setErrors({});
    handleErrorChange();
    // console.log("phone valid:", isValidPhoneNumber(formData.phone));

    // console.log(passport);
    // console.log(photo);
    // console.log(residentCard);
    // console.log(signature);
    // console.log(confirm);

    const stepIsValid = validateStep(activeStep);
    if (stepIsValid) {
      if (activeStep === 0) {
        if (formData.stage === "") {
          handleInitialSave();
        } else {
          handleStep1Save();
        }
      } else if (formData.id && activeStep === 1) {
        handleStep2Save();
      } else if (formData.id && activeStep === 2) {
        handleStep3Save();
      } else if (formData.id && activeStep === 3) {
        handleStep4Save();
      } else {
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        localStorage.setItem(
          "coopaccountopeninginfo",
          JSON.stringify(formData)
        );
      }
    }
  };

  const handleInitialSave = () => {
    setLoader(true);
    axios
      .post(`${apiUrl}api/v1/accounts`, {
        fullName: formData.fullName,
        surname: formData.surname,
        motherName: formData.motherName,
        email: formData.email,
        phone: formData.phone,
        sex: formData.sex,
      })
      .then((res) => {
        // console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            id: res.data.id,
            stage: res.data.status,
            percentageCompleted: 1,
            error: false,
          };
          localStorage.setItem(
            "coopaccountopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          id: res.data.id,
          stage: res.data.status,
          percentageCompleted: 1,
          error: false,
        });
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormData({
          ...formData,
          error: err.response?.data.message || "Network Error",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleStep1Save = () => {
    setLoader(true);
    axios
      .put(`${apiUrl}api/v1/accounts/${formData.id}`, {
        fullName: formData.fullName,
        surname: formData.surname,
        motherName: formData.motherName,
        sex: formData.sex,
        email: formData.email,
        phone: formData.phone,
      })
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            error: false,
          };
          localStorage.setItem(
            "coopaccountopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          error: false,
        });
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormData({
          ...formData,
          error: err.response?.data?.message || "Network Error",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleStep2Save = () => {
    setLoader(true);
    axios
      .put(`${apiUrl}api/v1/accounts/${formData.id}`, {
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        percentageCompleted: 2,
      })
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            percentageCompleted: 2,
            error: false,
          };
          localStorage.setItem(
            "coopaccountopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          percentageCompleted: 2,
          error: false,
        });
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormData({
          ...formData,
          error: err.response?.data.message || "Network Error",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleStep3Save = () => {
    setLoader(true);
    axios
      .put(`${apiUrl}api/v1/accounts/${formData.id}`, {
        occupation: formData.occupation,
        initialDeposit: formData.initialDeposit,
        monthlyIncome: formData.monthlyIncome,
        branch: formData.branch,
        currency: formData.currency,
        percentageCompleted: 3,
      })
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            percentageCompleted: 3,
            error: false,
          };
          localStorage.setItem(
            "coopaccountopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          percentageCompleted: 3,
          error: false,
        });
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormData({
          ...formData,
          error: err.response?.data.message || "Network Error",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleStep4Save = () => {
    setLoader(true);
    const formdata = new FormData();
    photo && formdata.append("photo", photo);
    residentCard && formdata.append("residenceCard", residentCard);
    passport && formdata.append("passport", passport);
    signature && formdata.append("signature", signature);
    confirm && formdata.append("confirmationForm", confirm);
    axios
      .put(`${apiUrl}api/v1/accounts/${formData.id}/upload-files`, formdata)
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            percentageCompleted: 4,
            error: false,
          };
          localStorage.setItem(
            "coopaccountopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          percentageCompleted: 4,
          error: false,
        });
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return true;
      })
      .catch((err) => {
        console.log(err);
        setFormData({
          ...formData,
          error: err.response?.data.message || "Network Error",
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  // Function to handle previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  interface ApiResponse {
    // Define the structure of your API response
    data: string; // Change this based on your actual API response structure
  }

  // Function to handle form submission (you can implement your submission logic here)
  const handleSubmit = () => {
    handleErrorChange();
    setErrors({});
    // console.log(formData.accountType);
    // console.log(passport);
    // console.log(photo);
    // console.log(residentCard);
    // console.log(signature);
    // console.log(confirm);
    // console.log("re", validateStep(activeStep));

    // Validate the last step before submission
    if (validateStep(activeStep)) {
      // Add your form submission logic here
      // console.log("Form submitted!", formData);
      // const formdata = new FormData();
      // photo && formdata.append("photo", photo);
      // residentCard && formdata.append("residenceCard", residentCard);
      // passport && formdata.append("passport", passport);
      // signature && formdata.append("signature", signature);
      // confirm && formdata.append("confirmationForm", confirm);

      setLoader(true);
      const requestInfo = axios.put(`${apiUrl}api/v1/accounts/${formData.id}`, {
        fullName: formData.fullName,
        surname: formData.surname,
        motherName: formData.motherName,
        email: formData.email,
        sex: formData.sex,
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        occupation: formData.occupation,
        initialDeposit: formData.initialDeposit,
        monthlyIncome: formData.monthlyIncome,
        branch: formData.branch,
        currency: formData.currency,
        accountType: formData.accountType,
        percentageCompleted: 5,
      });
      // const requestFile = axios.put(
      //   `${apiUrl}api/v1/accounts/${formData.id}/upload-files`,
      //   formdata
      // );
      Promise.all([requestInfo])
        .then(([res1]: [AxiosResponse<ApiResponse>]) => {
          // console.log(res1);
          setFormData({ ...formData, stage: "COMPLETE" });

          handleNext();
          localStorage.removeItem("coopaccountopeninginfo");
        })
        .catch((err) => {
          console.log(err);
          setFormData({
            ...formData,
            error: err.response?.data.message || "Network Error",
          });
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Function to validate the form fields for the current step
  const validateStep = (step: number): boolean => {
    // console.log("data:", formData);
    // console.log(photo);
    // console.log(passport);
    // console.log(confirm);
    // console.log(residentCard);
    // console.log(signature);

    // Implement your validation logic here
    let stepIsValid = true;
    const stepErrors: { [key: string]: boolean } = {};

    switch (step) {
      case 0:
        if (formData.fullName === "") {
          stepErrors.fullName = true;
          stepIsValid = false;
        }
        if (formData.surname === "") {
          stepErrors.surname = true;
          stepIsValid = false;
        }
        if (formData.phone === "" || !isValidPhoneNumber(formData.phone)) {
          stepErrors.phone = true;
          stepIsValid = false;
        }
        if (formData.email === "" || !isValidEmail(formData.email)) {
          stepErrors.email = true;
          stepIsValid = false;
        }
        if (formData.confirm === false) {
          stepErrors.confirm = true;
          stepIsValid = false;
        }
        if (isVerified === false) {
          stepErrors.verified = true;
          stepIsValid = false;
        }
        if (formData.motherName === "") {
          stepErrors.motherName = true;
          stepIsValid = false;
        }
        if (formData.sex === "") {
          stepErrors.sex = true;
          stepIsValid = false;
        }
        // Validate personal information fields
        break;
      case 1:
        // Validate contact information fields
        if (formData.streetAddress === "") {
          stepErrors.streetAddress = true;
          stepIsValid = false;
        }
        break;
      case 2:
        if (formData.occupation === "") {
          stepErrors.occupation = true;
          stepIsValid = false;
        }
        if (formData.branch === "") {
          formData.branch = "Head Office"
          // stepErrors.branch = true;
          // stepIsValid = false;
        }
        if (formData.initialDeposit === null || formData.initialDeposit < 100) {
          stepErrors.initialDeposit = true;
          stepIsValid = false;
        }
        if (formData.monthlyIncome === null || formData.monthlyIncome <= 0) {
          stepErrors.monthlyIncome = true;
          stepIsValid = false;
        }
        // Validate financial information fields
        break;
      case 3:
        if (photo === null) {
          stepErrors.photo = true;
          stepIsValid = false;
        }
        if (passport === null) {
          stepErrors.passport = true;
          stepIsValid = false;
        }
        if (residentCard === null) {
          stepErrors.residentCard = true;
          stepIsValid = false;
        }
        if (signature === null) {
          stepErrors.signature = true;
          stepIsValid = false;
        }
        if (confirm === null) {
          stepErrors.confirm = true;
          stepIsValid = false;
        }
        break;
      case 4:
        if (formData.accountType === null || formData.accountType === 0) {
          stepErrors.accountType = true;
          stepIsValid = false;
        }
        break;
      // Add validation logic for other steps similarly
      default:
        break;
    }

    // Update the errors state
    setErrors((prevErrors) => ({ ...prevErrors, ...stepErrors }));
    return stepIsValid;
  };

  return (
    <div>
      {formData.error && <Alert severity="error">{formData.error}</Alert>}

      <form className="loan-form-container" id="Loan_Request">
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            style={{ marginBottom: 25 }}
            // orientation={isNarrowScreen ? "vertical" : "horizontal"}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completedSteps[index]}>
                <StepLabel>{!isNarrowScreen && label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <div className="formComplete">
                  <div className="container">
                    <div className="top">
                      <CheckCircle className="icon" />
                      <h2>All steps completed</h2>
                    </div>
                    <div className="bottom">
                      <p>
                        Thank you for completing the bank account opening form!
                        Your information has been successfully submitted. Our
                        team will now review your application.
                      </p>
                      <p>
                        You will receive an email confirmation shortly with
                        details about the next steps in the process. If
                        additional information is required, a representative
                        from our bank will reach out to you.
                      </p>
                    </div>
                  </div>
                </div>
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
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                          <TextField
                            type="text"
                            name="text-1"
                            placeholder="Your Full Name"
                            id="form-field-text-1_651becd154b31"
                            className="form-input form-name--field"
                            value={formData.fullName}
                            fullWidth
                            error={errors.fullName}
                            onChange={(e) => handleLetterChange("fullName", e)}
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
                          <TextField
                            type="text"
                            name="name-4"
                            placeholder="Your Surname"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.surname}
                            value={formData.surname}
                            onChange={(e) => handleLetterChange("surname", e)}
                            required
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                            Mother's Name{" "}
                            <span className="form-required">*</span>
                          </label>
                          <TextField
                            type="text"
                            name="text-1"
                            placeholder="Your Mother's Full Name"
                            id="form-field-text-1_651becd154b31"
                            className="form-input form-name--field"
                            data-required="1"
                            fullWidth
                            error={errors.motherName}
                            value={formData.motherName}
                            onChange={(e) =>
                              handleLetterChange("motherName", e)
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
                            className={
                              errors.sex ? "error form-label" : "form-label"
                            }
                            id="form-field-name-4_651becd154b31-label"
                          >
                            Sex <span className="form-required">*</span>
                          </label>
                          <div className="sex">
                            <div>
                              <input
                                type="radio"
                                name="name-4"
                                value="MALE"
                                checked={formData.sex === "MALE"}
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
                                value="FEMALE"
                                checked={formData.sex === "FEMALE"}
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
                    <Grid container xs={12} spacing={3} columnSpacing={3}>
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
                            Email Address{" "}
                            <span className="form-required">*</span>
                          </label>
                          <TextField
                            type="email"
                            name="email-1"
                            placeholder="E.g. abdi@yahoo.com"
                            id="form-field-email-1_651becd154b31"
                            className="form-input form-email--field"
                            data-required="1"
                            aria-required="true"
                            fullWidth
                            error={errors.email}
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
                            className={
                              errors.phone ? "error form-label" : "form-label"
                            }
                            id="form-field-phone-1_651becd154b31-label"
                          >
                            Phone <span className="form-required">*</span>
                          </label>
                          {/* <TextField
                            type="text"
                            name="phone-1"
                            placeholder="E.g. +1 300 400 5000"
                            id="form-field-phone-1_651becd154b31"
                            className="form-input form-field--phone"
                            data-required="1"
                            aria-required="true"
                            fullWidth
                            error={errors.phone}
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            required
                          /> */}
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(value) =>
                              handleInputChange("phone", value as string)
                            }
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="form-row">
                    <div className="form-field">
                      <label
                        lang="form-field-date-1-picker_651becd154b31"
                        // className="form-label"
                        className={
                          errors.confirm ? "error form-label" : "form-label"
                        }
                        id="form-field-date-1-picker_651becd154b31-label"
                      >
                        Agreement <span className="form-required">*</span>
                      </label>
                      <div className="confirmation">
                        <input
                          type="checkbox"
                          name="checkbox-1[]"
                          className={errors.confirm ? "error" : ""}
                          // value="Yes"
                          checked={formData.confirm}
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
                          . And I confirm that I don't have a diaspora account
                          with any other bank.
                        </p>
                      </div>
                    </div>
                    {!isVerified && (
                      <div className="form-field" style={{ margin: "1rem 0" }}>
                        <label
                          lang="form-field-date-1-picker_651becd154b31"
                          // className="form-label"
                          className={
                            errors.verified ? "error form-label" : "form-label"
                          }
                          id="form-field-date-1-picker_651becd154b31-label"
                        >
                          verify
                        </label>
                        <ReCAPTCHA
                          sitekey="6Ld2dDkpAAAAAI33KugpnYCnoQwXdW9kgi54PAO5"
                          onChange={handleVerification}
                        />
                      </div>
                    )}
                  </Grid>
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container xs={12} rowSpacing={4}>
                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                          <TextField
                            type="text"
                            name="name-4"
                            placeholder="Eg. 123 MD New Way"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.streetAddress}
                            value={formData.streetAddress}
                            onChange={(e) =>
                              handleInputChange("streetAddress", e.target?.value || '')
                            }
                            required
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                              data-select2-id=""
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  error={errors.country}
                                />
                              )}
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
                          <TextField
                            type="text"
                            name="name-4"
                            placeholder="Eg. New South Wales"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.state}
                            value={formData.state}
                            onChange={(e) => handleLetterChange("state", e)}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                          <TextField
                            type="text"
                            name="text-1"
                            placeholder="Eg. New York"
                            id="form-field-text-1_651becd154b31"
                            className="form-input form-name--field"
                            data-required="1"
                            fullWidth
                            error={errors.city}
                            value={formData.city}
                            onChange={(e) => handleLetterChange("city", e)}
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
                          <TextField
                            type="text"
                            name="text-1"
                            placeholder="Eg. 2000"
                            id="form-field-text-1_651becd154b31"
                            className="form-input form-name--field"
                            data-required="1"
                            fullWidth
                            error={errors.zipCode}
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
                    <Grid
                      container
                      xs={12}
                      spacing={3}
                      columnSpacing={3}
                      className="row1"
                    >
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
                          <TextField
                            type="text"
                            name="name-4"
                            placeholder="Your Occupation"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.occupation}
                            value={formData.occupation}
                            onChange={(e) =>
                              handleLetterChange("occupation", e)
                            }
                            required
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      spacing={3}
                      columnSpacing={3}
                      className="row1"
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        columnSpacing={3}
                        className="form-row"
                      >
                        <Grid
                          container
                          xs={12}
                          columnSpacing={3}
                          className="row1"
                        >
                          <Grid
                            item
                            xs={12}
                            sm={3}
                            id="text-1"
                            // className="form-col form-col-6 "
                          >
                            <div className="form-field">
                              <label
                                className="form-label"
                                id="form-field-text-1_651becd154b31-label"
                              >
                                Currency{" "}
                                <span className="form-required">*</span>
                              </label>
                              <FormControl fullWidth>
                                <div className="select">
                                  <select
                                    required
                                    id="forminator-form-2333__field--select-1_6523b367d1783"
                                    className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                                    data-required="1"
                                    name="select-1"
                                    data-default-value=""
                                    data-placeholder="Choose Your Branch"
                                    data-search="false"
                                    value={formData.currency ?? ""}
                                    onChange={(e) =>
                                      handleInputChange(
                                        "currency",
                                        e.target.value
                                      )
                                    }
                                    aria-labelledby="forminator-form-2333__field--select-1_6523b367d1783-label"
                                    aria-describedby="forminator-form-2333__field--select-1_6523b367d1783-description forminator-form-2333__field--select-1_6523b367d1783-error"
                                    data-select2-id="select2-data-forminator-form-2333__field--select-1_6523b367d1783"
                                    aria-hidden="true"
                                    aria-invalid="true"
                                  >
                                    {currency.map((currency) => {
                                      return (
                                        <option
                                          value={currency.id}
                                          key={currency.id}
                                        >
                                          {currency.avr}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <span>
                                    <i className="fas fa-chevron-down"></i>
                                  </span>
                                </div>
                              </FormControl>
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sm={9}
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
                                      {/* ${" "} */}
                                      {formData.currency &&
                                        currency[formData.currency - 1].sign}
                                    </InputAdornment>
                                  }
                                  fullWidth
                                  error={errors.initialDeposit}
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
                                  Minimum of 100{" "}
                                  {formData.currency &&
                                    currency[formData.currency - 1].name}{" "}
                                  should be on your Diaspora Account in less
                                  than one month, otherwise your account
                                  automatically be inactive
                                </span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
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
                          <TextField
                            type="number"
                            name="name-4"
                            placeholder="Your Monthly Income"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.monthlyIncome}
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

                  <Grid item xs={12} className="form-row">
                    <Grid item xs={12} spacing={3} className="form-row">
                      <Grid
                        container
                        xs={12}
                        columnSpacing={3}
                        className="row1"
                      >
                        <Grid
                          item
                          xs={12}
                          id="name-4"
                          className="form-col form-col-6 "
                        >
                          <div className="form-field">
                            <label
                              id="forminator-form-2333__field--select-2_6523b367d1783-label"
                              className="form-label"
                            >
                              Choose Your Nearest Branch{" "}
                              <span className="forminator-required"></span>
                            </label>
                            <div className="select">
                              <Autocomplete
                                disablePortal
                                value={formData.branch}
                                onChange={(e, newValue) =>
                                  handleInputChange("branch", newValue || "")
                                }
                                options={branches}
                                getOptionLabel={(option) => option} // Specify how options are displayed
                                sx={{ width: "100%", mt: 1 }}
                                placeholder="Choose Your Branch"
                                id="forminator-form-2333__field--select-1_6523b367d1783"
                                className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                                data-select2-id=""
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    fullWidth
                                    error={errors.branch}
                                  />
                                )}
                              />
                              {/* <select
                              required
                              id="forminator-form-2333__field--select-1_6523b367d1783"
                              className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                              data-required="1"
                              name="select-1"
                              data-default-value=""
                              data-placeholder="Choose Your Branch"
                              data-search="false"
                              aria-labelledby="forminator-form-2333__field--select-1_6523b367d1783-label"
                              aria-describedby="forminator-form-2333__field--select-1_6523b367d1783-description forminator-form-2333__field--select-1_6523b367d1783-error"
                              data-select2-id="select2-data-forminator-form-2333__field--select-1_6523b367d1783"
                              aria-hidden="true"
                              aria-invalid="true"
                            >
                              {branches.map((branch: string) => {
                                return <option value={branch}>{branch}</option>;
                              })}
                            </select> */}
                              {/* <span>
                              <i className="fas fa-chevron-down"></i>
                            </span> */}
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {activeStep === 3 && (
                <Grid container xs={12} rowSpacing={4}>
                  <Grid item xs={12} className="form-row">
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                            Upload Photo{" "}
                            <span className="form-required">*</span>
                          </label>
                          <div
                            className="file-upload-container"
                            data-element="upload-2_651becd154b31"
                            aria-describedby="form-field-upload-2_651becd154b31-description"
                          >
                            <ImageUpload
                              error={errors.photo ? true : false}
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
                              error={errors.passport ? true : false}
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
                    <Grid
                      container
                      xs={12}
                      columnSpacing={3}
                      spacing={3}
                      className="row1"
                    >
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
                              error={errors.residentCard ? true : false}
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
                              error={errors.signature ? true : false}
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
                    <Grid item xs={12} sm={12} className="form-col form-col-4 ">
                      <div className="form-field">
                        <label
                          lang="form-field-upload-2_651becd154b31"
                          className="form-label"
                        >
                          Upload Confirmation file{" "}
                          <span className="form-required">*</span>
                        </label>
                        <div className="deposit-notice">
                          <span>
                            Please download the confirmation form, sign it, and
                            upload the signed document. Ensure a clear
                            signature.
                          </span>
                        </div>
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

                    <Grid item xs={12} sm={12} className="form-col form-col-4 ">
                      <div className="form-field">
                        <div
                          className="file-upload-container"
                          data-element="upload-2_651becd154b31"
                          aria-describedby="form-field-upload-2_651becd154b31-description"
                        >
                          <FileUpload
                            error={errors.confirm ? true : false}
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
                <Grid
                  container
                  xs={12}
                  rowSpacing={4}
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.accountType && (
                    <div
                      className={`accountselect ${
                        errors.accountType && "error"
                      }`}
                    >
                      <p>select and account</p>
                    </div>
                  )}

                  <ChooseAccountType
                    state={formData}
                    setState={setFormData}
                    accountType={props.productType}
                  />
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
                {loader ? (
                  <CircularProgress />
                ) : (
                  <Button
                    disabled={
                      !isVerified && activeStep === steps.length - 1
                        ? true
                        : false
                    }
                    onClick={() => {
                      if (activeStep === steps.length - 1) {
                        handleSubmit();
                      } else {
                        handleNext();
                      }
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </form>
    </div>
  );
}

// http://10.1.151.64:1337/api/home-page?
// populate[hero][populate][header][populate]=*&
// populate[hero][populate][slide][populate]=*&
// populate[home][populate][background][*]=true&
// populate[home][populate][stat][populate]=*&
// populate[home][populate][content][populate]=*&
// populate[home][populate][header][populate]=*&
// populate[home][populate][offers][populate]=*

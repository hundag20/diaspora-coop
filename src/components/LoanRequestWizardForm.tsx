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
  schedule,
  incomeSource,
  // loanType,
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
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

const steps = ["Account Information", "Loan Information", "Document"];

export interface IAccountOpeningFormProps {
  productType: TProductType;
  prevData: FormItem | null;
}

interface BranchItems {
  id: number;
  branchName: string;
  status: string;
  addedAt: string;
  updatedAt: string;
}

interface FormItem {
  id: number | null;
  fullName: string;
  surname: string;
  email: string;
  phone: string;
  accountType: null | string;
  accountNumber: string;
  country: string;
  loanType: number;
  branch: null | BranchItems;
  incomeSource: string;
  loanAmount: null | number;
  schedule: number;
  confirm: boolean;
  accountVerified: boolean;
  stage: string;
  error: boolean;
  percentageCompleted: number;
  // add other properties as needed
}

const initialAccountState = {
  id: null,
  fullName: "",
  surname: "",
  email: "",
  phone: "",
  accountType: null,
  accountNumber: "",

  country: "",
  loanType: "",
  branch: "",

  incomeSource: "",
  loanAmount: null,
  schedule: "",

  confirm: false,
  stage: "",
  error: false,
  percentageCompleted: 0,
};

export function LoanRequestWizardForm(props: IAccountOpeningFormProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isNarrowScreen, setIsNarrowScreen] = useState(
    window.innerWidth <= 600
  );

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
  const [formDataf, setFormDataf] = useState(initialAccountState);
  const [formData, setFormData] = useState<FormItem>({
    id: null,
    fullName: "",
    surname: "",
    email: "",
    phone: "",
    accountNumber: "",
    accountType: null,

    country: "",
    loanType: 0,
    branch: null,
    schedule: 0,

    incomeSource: "",
    loanAmount: null,

    confirm: false,
    accountVerified: false,
    stage: "",
    error: false,
    percentageCompleted: 0,
  });
  // zipCode: "",
  // monthlyIncome: null,
  // sex: "",
  // currency: 1,
  // State to track form field errors
  const [errors, setErrors] = useState<{ [key: string]: any }>({});
  const [photo, setPhoto] = useState<File | null>(null);
  const [passport, setPassport] = useState<File | null>(null);
  const [residentCard, setResidentCard] = useState<File | null>(null);
  const [signature, setSignature] = useState<File | null>(null);
  const [confirm, setConfirm] = useState<File | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [vloader, setVLoader] = useState<boolean>(false);
  const [isVerified, setVerified] = useState<boolean>(false);

  const [loanType, setLoanType] = useState<any>([]);
  const [loanSchedules, setLoanSchedules] = useState<any>([]);
  const [bankBranches, setBankBranches] = useState<any>([]);

  const [incomeFile, setIncomeFile] = useState<File | null>(null);
  const [bankStatement, setBankStatement] = useState<File | null>(null);

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

  useEffect(() => {
    fetchLoanType();
    fetchLoanSchedules();
    fetchBankBranches();
  }, []);

  const fetchBankBranches = () => {
    axios
      .get(`${apiUrl}api/v1/bank-branches`)
      .then((res) => {
        console.log(res);
        setBankBranches(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchLoanSchedules = () => {
    axios
      .get(`${apiUrl}api/v1/loan-schedules`)
      .then((res) => {
        console.log(res);
        setLoanSchedules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const fetch = () => {
  //   axios.get(`${apiUrl}/api/v1/loan-types`).then((res) => {
  //     console.log(res);
  //     setLoanType(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  const fetchLoanType = () => {
    axios
      .get(`${apiUrl}api/v1/loan-types`)
      .then((res) => {
        console.log(res);
        setLoanType(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to handle form data change
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const filterLetters = (input: string) => {
    // Allow only letters (uppercase and lowercase) using a regular expression
    return input.replace(/[^a-zA-Z]/g, "");
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

    const stepIsValid = validateStep(activeStep);
    console.log("isvali", stepIsValid);
    console.log("isvali", formData);

    if (stepIsValid) {
      if (activeStep === 0) {
        handleInitialSave();
      } else if (activeStep === 1) {
        handleStep1Save();
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        handleStep2Save();
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }

    // const stepIsValid = validateStep(activeStep);
    // console.log('valid', stepIsValid);
  };

  const handleInitialSave = () => {
    setLoader(true);
    setErrors({});
    axios
      .post(`${apiUrl}api/v1/loans`, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        accountType: formData.accountType,
        accountNumber: formData.accountNumber,
      })
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            id: res.data.id,
            stage: res.data?.status,
            percentageCompleted: 1,
            error: false,
          };
          localStorage.setItem(
            "cooploanopeninginfo",
            JSON.stringify(updatedFormData)
          );
          return updatedFormData;
        });
        setFormData({
          ...formData,
          id: res.data.id,
          stage: res?.data?.status,
          percentageCompleted: 1,
          error: false,
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCompletedSteps((prevCompletedSteps) => {
          const newCompletedSteps = [...prevCompletedSteps];
          newCompletedSteps[activeStep] = true;
          return newCompletedSteps;
        });
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
      .put(`${apiUrl}api/v1/loans/${formData.id}`, {
        branch: formData.branch?.id,
        country: formData.country,
        loanSchedule: formData.schedule,
        loanType: formData.loanType,
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
            "cooploanopeninginfo",
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

  const handleStep2Save = () => {
    setLoader(true);
    let filearay = [];
    if (incomeFile) filearay.push(incomeFile);
    if (bankStatement) filearay.push(bankStatement);
    const formdata = new FormData();
    console.log("files", filearay);

    // formdata.append('files', filearay);
    filearay.forEach((file, index) => {
      // Append each file with a unique name (e.g., 'files[0]', 'files[1]', etc.)
      formdata.append(`files`, file);
    });
    formdata.append("sourcesOfIncome", formData.incomeSource);
    formdata.append("loanAmount", String(formData.loanAmount));
    // {
    //   sourcesOfIncome: formData.incomeSource,
    //   loanAmount: formData.loanAmount,
    //   files: filearay,
    // }
    axios
      .put(`${apiUrl}api/v1/loans/${formData.id}`, formdata)
      .then((res) => {
        console.log(res);
        setFormData((prevFormData) => {
          const updatedFormData = {
            ...prevFormData,
            percentageCompleted: 2,
            error: false,
          };
          localStorage.setItem(
            "cooploanopeninginfo",
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

  // Function to handle previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  interface ApiResponse {
    // Define the structure of your API response
    data: string; // Change this based on your actual API response structure
  }

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Function to validate the form fields for the current step
  const validateStep = (step: number): boolean => {
    // console.log("data:", formData);

    // Implement your validation logic here
    let stepIsValid = true;
    const stepErrors: { [key: string]: boolean } = {};

    switch (step) {
      case 0:
        if (formData.fullName === "") {
          stepErrors.fullName = true;
          stepIsValid = false;
        }
        if (formData.accountNumber === "") {
          stepErrors.accountNumber = true;
          stepIsValid = false;
        }
        if (formData.phone === "") {
          stepErrors.phone = true;
          stepIsValid = false;
        }
        if (formData.email === "" || !isValidEmail(formData.email)) {
          stepErrors.email = true;
          stepIsValid = false;
        }
        if (formData.accountVerified === false) {
          stepErrors.accountNumber = true;
          stepIsValid = false;
        }
        if (formData.confirm === false) {
          stepErrors.confirm = true;
          stepIsValid = false;
        }
        // if (isVerified === false) {
        //   stepErrors.verified = true;
        //   stepIsValid = false;
        // }
        // Validate personal information fields
        break;
      case 1:
        // Validate contact information fields
        if (formData.loanType == 0) {
          stepErrors.loanType = true;
          stepIsValid = false;
        }
        if (formData.schedule == 0) {
          stepErrors.schedule = true;
          stepIsValid = false;
        }
        if (formData.country === "") {
          stepErrors.country = true;
          stepIsValid = false;
        }
        if (formData.branch === null) {
          stepErrors.branch = true;
          stepIsValid = false;
        }
        break;
      case 2:
        if (formData.incomeSource === "") {
          stepErrors.incomeSource = true;
          stepIsValid = false;
        }
        if (formData.loanAmount === null || formData.loanAmount < 0) {
          stepErrors.loanAmount = true;
          stepIsValid = false;
        }
        if (incomeFile === null) {
          stepErrors.incomeFile = true;
          stepIsValid = false;
        }
        // Validate financial information fields
        break;
      default:
        break;
    }

    // Update the errors state
    setErrors((prevErrors) => ({ ...prevErrors, ...stepErrors }));
    return stepIsValid;
  };

  const handleVerifyAccount = () => {
    setVLoader(true);
    axios
      .get(
        `${apiUrl}api/v1/services/bank-account-info?accountNumber=${formData.accountNumber}`
      )
      // .post(`http://10.1.245.150:7081/v1/cbo/`, {
      //   CustomerInfoRequest: {
      //     ESBHeader: {
      //       serviceCode: "040000",
      //       channel: "USSD",
      //       Service_name: "customerInfo",
      //       Message_Id: "Mmr2qyutr82729",
      //     },
      //     CusomerInfo: {
      //       AccountId: formData.accountNumber,
      //     },
      //   },
      // })
      .then((res: any) => {
        console.log(res);
        // if (res?.data.CustomerInfoResponse?.CustomerInfo.length) {
        setFormData({
          ...formData,
          accountVerified: true,
          fullName: res.data?.displayName,
          accountType: res?.data?.categoryName,
          phone: res.data?.phoneNumber,
        });
        setErrors({
          ...errors,
          accountNumber: false,
        });
        // } else {
        //   // const stepErrors: { [key: string]: boolean } = {};
        //   // stepErrors.accountNumber = true;
        //   // setErrors((prevErrors) => ({ ...prevErrors, ...stepErrors }));
        //   setErrors({
        //     ...errors,
        //     accountNumber: "The account you provided is invalid!",
        //   });
        // }
      })
      .catch((err) => {
        console.log("eer", err);
        setErrors({
          ...errors,
          accountNumber:
            err.response?.data?.message ||
            err.response?.data?.error ||
            "Network issues, please try again.",
        });
      })
      .finally(() => {
        setVLoader(false);
      });
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
                        Thank you for completing the loan request form! Your
                        information has been successfully submitted. Our team
                        will now review your application.
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
                    <Grid item xs={12} className="form-row">
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
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="form-row">
                    <Grid item xs={12} className="form-row">
                      <Grid
                        container
                        xs={12}
                        columnSpacing={3}
                        className="row1"
                      >
                        <Grid
                          item
                          xs={12}
                          sm={9}
                          id="name-4"
                          className="form-col form-col-6 "
                        >
                          <div className="form-field">
                            <label
                              lang="form-field-phone-1_651becd154b31"
                              className={
                                errors.account
                                  ? "error form-label"
                                  : "form-label"
                              }
                              id="form-field-phone-1_651becd154b31-label"
                            >
                              Account Number{" "}
                              <span className="form-required">*</span>
                            </label>
                            <TextField
                              type="number"
                              name="accountNumber-1"
                              placeholder="account number"
                              id="form-field-accountNumber-1_651becd154b31"
                              className="form-input form-field--accountNumber"
                              data-required="1"
                              aria-required="true"
                              fullWidth
                              error={errors.accountNumber}
                              helperText={
                                errors.accountNumber && errors.accountNumber
                              }
                              value={formData.accountNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "accountNumber",
                                  e.target.value
                                )
                              }
                              required
                            />
                            {/* <PhoneInput
                            placeholder="Enter phone number"
                            value={formData.phone}
                            onChange={(value) =>
                              handleInputChange("phone", value as string)
                            }
                          /> */}
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={3}
                          id="name-4"
                          className="form-col form-col-6 "
                        >
                          <div className="form-field">
                            <label
                              lang="form-field-phone-1_651becd154b31"
                              className={
                                errors.account
                                  ? "error form-label"
                                  : "form-label"
                              }
                              id="form-field-phone-1_651becd154b31-label"
                            >
                              {". "}
                              {/* Account Number{" "}"" */}
                              <span className="form-required"> {"  "}</span>
                            </label>
                            {vloader ? (
                              <Button
                                fullWidth
                                variant="contained"
                                style={{ color: "white", height: "40px" }}
                              >
                                <CircularProgress />
                              </Button>
                            ) : (
                              <Button
                                fullWidth
                                variant="contained"
                                onClick={handleVerifyAccount}
                                style={{ height: "40px" }}
                              >
                                Verify
                              </Button>
                            )}
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  {!formData.accountVerified && (
                    <Grid item xs={12} className="form-row">
                      <Grid item xs={12} className="form-row">
                        <Grid
                          container
                          xs={12}
                          columnSpacing={3}
                          className="row1"
                        >
                          <Grid
                            item
                            xs={12}
                            sm={9}
                            id="name-4"
                            className="form-col form-col-6 "
                          >
                            <div className="form-field">
                              <label
                                lang="form-field-phone-1_651becd154b31"
                                className={"form-label"}
                                id="form-field-phone-1_651becd154b31-label"
                              >
                                You don't have an account?{" "}
                                <Link to={"/open-account"}>Apply Now</Link>
                              </label>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {formData.accountVerified && (
                    <Grid item xs={12} className="form-row">
                      <Grid
                        container
                        xs={12}
                        columnSpacing={3}
                        className="row1"
                      >
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          id="text-1"
                          className="form-col form-col-6 "
                        >
                          <div className="form-field success">
                            {/* <label
                              className="form-label"
                              id="form-field-text-1_651becd154b31-label"
                            >
                              Full Name <span className="form-required">*</span>
                            </label> */}
                            <TextField
                              type="text"
                              name="text-1"
                              placeholder="Your Full Name"
                              id="form-field-text-1_651becd154b31"
                              className="form-input form-name--field success"
                              value={formData.fullName}
                              fullWidth
                              error={errors.fullName}
                              onChange={(e) =>
                                handleLetterChange("fullName", e)
                              }
                              data-required="1"
                              required
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}

                  {formData.accountVerified && (
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
                          </p>
                        </div>
                      </div>
                      {/* {!isVerified && (
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
                    )} */}
                    </Grid>
                  )}
                </Grid>
              )}
              {activeStep === 1 && (
                <Grid container xs={12} rowSpacing={4}>
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
                            className={
                              errors.loanType
                                ? "error form-label"
                                : "form-label"
                            }
                            id="form-field-name-4_651becd154b31-label"
                          >
                            Loan Type
                          </label>
                          <div className="select">
                            <select
                              name="address-1-country"
                              id="forminator-form-2333__field--address-1-country_6523b367d1783"
                              data-search="true"
                              data-placeholder="Select Loan Type"
                              data-default-value=""
                              data-select2-id="select2-data-forminator-form-2333__field--address-1-country_6523b367d1783"
                              aria-hidden="true"
                              defaultValue={0}
                              value={formData.loanType}
                              onChange={(e) =>
                                // handleInputChange(
                                //   "loanType",
                                //   e.target.value || ""
                                // )
                                setFormData({
                                  ...formData,
                                  loanType: parseInt(e.target.value),
                                })
                              }
                            >
                              <option value={0} disabled>
                                {"Select loan type"}
                              </option>
                              {loanType.map((loanType: any) => {
                                return (
                                  <option value={loanType.id}>
                                    {loanType.loanType}
                                  </option>
                                );
                              })}
                            </select>
                            <span>
                              <i className="fas fa-chevron-down"></i>
                            </span>
                          </div>
                        </div>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={6}
                        id="email-1"
                        className="form-col form-col-4 "
                      >
                        <div className="form-field">
                          {/* className="form-label" */}
                          <label
                            className={
                              errors.schedule
                                ? "error form-label"
                                : "form-label"
                            }
                            id="form-field-name-4_651becd154b31-label"
                          >
                            Schedule
                          </label>
                          <div className="select">
                            <select
                              name="address-1-country"
                              id="forminator-form-2333__field--address-1-country_6523b367d1783"
                              data-search="true"
                              data-placeholder="Select schedule"
                              data-default-value=""
                              data-select2-id="select2-data-forminator-form-2333__field--address-1-country_6523b367d1783"
                              aria-hidden="true"
                              value={formData.schedule}
                              onChange={(e) => {
                                console.log(e.target.value);
                                setFormData({
                                  ...formData,
                                  schedule: parseInt(e.target.value),
                                });
                                // handleInputChange(
                                //   "schedule",
                                //   e.target.value || ""
                                // );
                              }}
                            >
                              <option value={0} disabled>
                                {"Select schedule"}
                              </option>
                              {loanSchedules.map((schedule: any) => {
                                return (
                                  <option value={schedule.id}>
                                    {schedule.loanSchedule}
                                  </option>
                                );
                              })}
                            </select>
                            <span>
                              <i className="fas fa-chevron-down"></i>
                            </span>
                          </div>
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
                        id="email-1"
                        className="form-col form-col-4 "
                      >
                        <div className="form-field">
                          <label
                            id="forminator-form-2333__field--select-2_6523b367d1783-label"
                            className="form-label"
                          >
                            Choose Your Nearest Branch{" "}
                            <span className="forminator-required">*</span>
                          </label>
                          <div className="">
                            <Autocomplete
                              disablePortal
                              value={formData.branch}
                              onChange={(e: any, newValue: any) => {
                                console.log(newValue);
                                handleInputChange("branch", newValue);
                              }}
                              options={bankBranches}
                              getOptionLabel={(option: any) =>
                                option.branchName
                              } // Specify how options are displayed
                              sx={{ width: "100%" }}
                              placeholder="Choose Your Branch"
                              id="forminator-form-2333__field--select-1_6523b367d1783"
                              // className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                              data-select2-id=""
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  fullWidth
                                  error={errors.branch}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {activeStep === 2 && (
                <Grid container xs={12} rowSpacing={4}>
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
                            className={
                              errors.loanType
                                ? "error form-label"
                                : "form-label"
                            }
                            id="form-field-name-4_651becd154b31-label"
                          >
                            Income Source
                          </label>
                          <div className="select">
                            <select
                              name="address-1-country"
                              id="forminator-form-2333__field--address-1-country_6523b367d1783"
                              data-search="true"
                              data-placeholder="Specify your Income Source"
                              data-default-value=""
                              data-select2-id="select2-data-forminator-form-2333__field--address-1-country_6523b367d1783"
                              value={formData.incomeSource}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  incomeSource: e.target.value,
                                })
                              }
                              aria-hidden="true"
                              defaultValue={""}
                            >
                              <option value={""} disabled>
                                {"Select your Income source"}
                              </option>
                              {incomeSource.map((incomeSource: any) => {
                                return (
                                  <option value={incomeSource}>
                                    {incomeSource}
                                  </option>
                                );
                              })}
                            </select>
                            <span>
                              <i className="fas fa-chevron-down"></i>
                            </span>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        id="email-1"
                        className="form-col form-col-4 "
                      >
                        <div className="form-field">
                          <label
                            className="form-label"
                            id="form-field-name-4_651becd154b31-label"
                          >
                            Loan amount <span className="form-required">*</span>
                          </label>
                          <TextField
                            type="number"
                            name="name-4"
                            placeholder="Loan amount"
                            id="form-field-name-4_651becd154b31"
                            className="form-input form-name--field"
                            aria-required="true"
                            fullWidth
                            error={errors.loanAmount}
                            value={formData.loanAmount}
                            onChange={(e) =>
                              handleInputChange("loanAmount", e.target.value)
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
                        id="upload-2"
                        className="form-col form-col-4 "
                      >
                        <div className="form-field">
                          <label
                            lang="form-field-upload-2_651becd154b31"
                            className="form-label"
                          >
                            Upload file <span className="form-required">*</span>
                          </label>
                          <div
                            className="file-upload-container"
                            data-element="upload-2_651becd154b31"
                            aria-describedby="form-field-upload-2_651becd154b31-description"
                          >
                            <FileUpload
                              name="upload-2[]"
                              error={errors.incomeFile ? true : false}
                              stateFunction={incomeFile}
                              setStateFunction={setIncomeFile}
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
                            Bank Statement(Optional)
                          </label>
                          <div
                            className="file-upload-container"
                            data-element="upload-2_651becd154b31"
                            aria-describedby="form-field-upload-2_651becd154b31-description"
                          >
                            <FileUpload
                              name="upload-2[]"
                              error={errors.bankStatement ? true : false}
                              stateFunction={bankStatement}
                              setStateFunction={setBankStatement}
                            />
                          </div>
                          <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {/* {activeStep === 5 && <Grid container xs={12} rowSpacing={4}></Grid>} */}
              {formData.accountVerified && (
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
                    // !isVerified && activeStep === steps.length - 1
                    // disabled={
                    //   activeStep === steps.length - 1
                    //     ? true
                    //     : false
                    // }
                    <Button
                      onClick={() => {
                        handleNext();
                        // if (activeStep === steps.length - 1) {
                        //   handleSubmit();
                        // } else {
                        // }
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  )}
                </Box>
              )}
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

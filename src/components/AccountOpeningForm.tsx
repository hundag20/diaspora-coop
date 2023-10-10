import { Grid } from '@mui/material';
import '../styles/form.scss';
import { FileUpload, branches, countries } from './LoanRequestForm';

export interface IAccountOpeningFormProps {}

export function AccountOpeningForm(props: IAccountOpeningFormProps) {
  return (
    <form className='loan-form-container' id='Loan_Request'>
      <Grid container xs={11} lg={10} rowSpacing={4}>
        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='text-1'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-text-1_651becd154b31-label'
                >
                  Full Name <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='text-1'
                  placeholder='Your Full Name'
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='name-4'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Surname <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-4'
                  placeholder='Your Surname'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='text-1'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-text-1_651becd154b31-label'
                >
                  Mother's Name <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='text-1'
                  placeholder="Your Mother's Full Name"
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='name-4'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Sex <span className='form-required'>*</span>
                </label>
                <div className='sex'>
                  <div>
                    <input type='radio' name='name-4' value='Male' required />
                    <label>Male</label>
                  </div>
                  <div>
                    <input type='radio' name='name-4' value='Female' required />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              id='email-1'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-email-1_651becd154b31'
                  className='form-label'
                  id='form-field-email-1_651becd154b31-label'
                >
                  Email Address <span className='form-required'>*</span>
                </label>
                <input
                  type='email'
                  name='email-1'
                  placeholder='E.g. abdi@yahoo.com'
                  id='form-field-email-1_651becd154b31'
                  className='form-input form-email--field'
                  data-required='1'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='phone-1'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-phone-1_651becd154b31'
                  className='form-label'
                  id='form-field-phone-1_651becd154b31-label'
                >
                  Phone <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='phone-1'
                  placeholder='E.g. +1 300 400 5000'
                  id='form-field-phone-1_651becd154b31'
                  className='form-input form-field--phone'
                  data-required='1'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid item xs={12} id='name-4' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Street Address <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-4'
                  placeholder='Eg. 123 MD New Way'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='text-1'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-text-1_651becd154b31-label'
                >
                  City
                </label>
                <input
                  type='text'
                  name='text-1'
                  placeholder='Eg. New York'
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='name-4'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  State/Province
                </label>
                <input
                  type='text'
                  name='name-4'
                  placeholder='Eg. New South Wales'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='text-1'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-text-1_651becd154b31-label'
                >
                  ZIP / Postal Code
                </label>
                <input
                  type='text'
                  name='text-1'
                  placeholder='Eg. 2000'
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='name-4'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Country
                </label>
                <div className='select'>
                  <select
                    name='address-1-country'
                    id='forminator-form-2333__field--address-1-country_6523b367d1783'
                    data-search='true'
                    data-placeholder='Select country'
                    data-default-value=''
                    data-select2-id='select2-data-forminator-form-2333__field--address-1-country_6523b367d1783'
                    aria-hidden='true'
                  >
                    {countries.map((country: any) => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                  <span>
                    <i className='fas fa-chevron-down'></i>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid item xs={12} id='name-4' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Occupation <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-4'
                  placeholder='Your Occupation'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='text-1'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-text-1_651becd154b31-label'
                >
                  Initial Deposit <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='text-1'
                  placeholder='Eg. $100'
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                  required
                />
                <div className='deposit-notice'>
                  <span>
                    Minimum of 100 dollars should be on your Diaspora Account in
                    less than one month, otherwise your account automatically be
                    inactive
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='name-4'
              className='form-col form-col-6 '
            >
              <div className='form-field'>
                <label
                  className='form-label'
                  id='form-field-name-4_651becd154b31-label'
                >
                  Monthly Income <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-4'
                  placeholder='Your Monthly Income'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='upload-2'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-upload-2_651becd154b31'
                  className='form-label'
                >
                  Upload Photo <span className='form-required'>*</span>
                </label>
                <div
                  className='file-upload-container'
                  data-element='upload-2_651becd154b31'
                  aria-describedby='form-field-upload-2_651becd154b31-description'
                >
                  <FileUpload name='upload-2[]' />
                </div>
                <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='upload-2'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-upload-2_651becd154b31'
                  className='form-label'
                >
                  Residence card or yellow card{' '}
                  <span className='form-required'>*</span>
                </label>
                <div
                  className='file-upload-container'
                  data-element='upload-2_651becd154b31'
                  aria-describedby='form-field-upload-2_651becd154b31-description'
                >
                  <FileUpload name='upload-2[]' />
                </div>
                <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid
              item
              xs={12}
              sm={6}
              id='upload-2'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-upload-2_651becd154b31'
                  className='form-label'
                >
                  Upload Passport <span className='form-required'>*</span>
                </label>
                <div
                  className='file-upload-container'
                  data-element='upload-2_651becd154b31'
                  aria-describedby='form-field-upload-2_651becd154b31-description'
                >
                  <FileUpload name='upload-2[]' />
                </div>
                <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id='upload-2'
              className='form-col form-col-4 '
            >
              <div className='form-field'>
                <label
                  lang='form-field-upload-2_651becd154b31'
                  className='form-label'
                >
                  Upload Signature <span className='form-required'>*</span>
                </label>
                <div
                  className='file-upload-container'
                  data-element='upload-2_651becd154b31'
                  aria-describedby='form-field-upload-2_651becd154b31-description'
                >
                  <FileUpload name='upload-2[]' />
                </div>
                <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid item xs={12} id='name-4' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  id='forminator-form-2333__field--select-2_6523b367d1783-label'
                  className='form-label'
                >
                  Choose Your Nearest Branch{' '}
                  <span className='forminator-required'>*</span>
                </label>
                <div className='select'>
                  <select
                    required
                    id='forminator-form-2333__field--select-1_6523b367d1783'
                    className='forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only'
                    data-required='1'
                    name='select-1'
                    data-default-value=''
                    data-placeholder='Choose Your Branch'
                    data-search='false'
                    aria-labelledby='forminator-form-2333__field--select-1_6523b367d1783-label'
                    aria-describedby='forminator-form-2333__field--select-1_6523b367d1783-description forminator-form-2333__field--select-1_6523b367d1783-error'
                    data-select2-id='select2-data-forminator-form-2333__field--select-1_6523b367d1783'
                    aria-hidden='true'
                    aria-invalid='true'
                  >
                    {branches.map((branch: string) => {
                      return <option value={branch}>{branch}</option>;
                    })}
                  </select>
                  <span>
                    <i className='fas fa-chevron-down'></i>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid item xs={12} id='name-4' className='form-col form-col-6 '>
              <div className='form-field form-is_filled'>
                <label
                  lang='form-field-date-1-picker_651becd154b31'
                  className='form-label'
                  id='form-field-date-1-picker_651becd154b31-label'
                >
                  Date <span className='form-required'>*</span>
                </label>
                <div className='form-input-with-icon'>
                  <label lang='form-field-date-1-picker_651becd154b31'>
                    <span
                      className='form-icon-calendar'
                      aria-hidden='true'
                    ></span>
                  </label>
                  <input type='date' name='date-1' className='date' required />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <div className='form-field'>
            <label
              lang='form-field-date-1-picker_651becd154b31'
              className='form-label'
              id='form-field-date-1-picker_651becd154b31-label'
            >
              Confirmation <span className='form-required'>*</span>
            </label>
            <div className='confirmation'>
              <input
                type='checkbox'
                name='checkbox-1[]'
                value='Yes'
                id='form-field-checkbox-1-1-651becd154b31'
                aria-labelledby='form-field-checkbox-1-1-651becd154b31-label'
                data-calculation='0'
                aria-describedby='form-field-checkbox-1-651becd154b31-description'
              />
              <p>
                I confirm that I do not have a diaspora account with any other
                bank
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} className='form-row form-row-last'>
          <div className='form-field'>
            <div className='download-doc'>
              <div className='box'>
                <div className='image'>
                  <img src='/images/document.svg'></img>
                </div>
                <div className='middle'>
                  <div>
                    <h3>
                      <a>Confirmation Form</a>
                    </h3>
                  </div>
                  <div className='small-icons'>
                    <div>
                      <i className='fas fa-copy'></i>
                      <span> 1 file(s) </span>
                    </div>
                    <div>
                      <i className='far fa-hdd'></i>
                      <span> 20 KB</span>
                    </div>
                  </div>
                </div>
                <div className='btn'>
                  <a
                    href='https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fdiaspora.coopbankoromia.com.et%2Fwp-content%2Fuploads%2F2023%2F06%2FDiaspora-Banking.docx&wdOrigin=BROWSELINK'
                    target='_blank'
                  >
                    DOWNLOAD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className='form-row'>
          <div className='form-field'>
            <label
              lang='form-field-upload-2_651becd154b31'
              className='form-label'
            >
              Upload Confirmation file <span className='form-required'>*</span>
            </label>
            <div
              className='file-upload-container'
              data-element='upload-2_651becd154b31'
              aria-describedby='form-field-upload-2_651becd154b31-description'
            >
              <FileUpload name='upload-2[]' />
            </div>
            <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
          </div>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <div className='form-field'>
            <label
              lang='form-field-textarea-1_651becd154b31'
              id='form-field-textarea-1_651becd154b31-label'
              className='form-label'
            >
              Comment or message (optional)
            </label>
            <textarea
              name='textarea-1'
              placeholder=''
              id='form-field-textarea-1_651becd154b31'
              className='form-textarea'
              style={{ minHeight: '70px' }}
            ></textarea>
          </div>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <div className='form-field'>
            <label
              lang='form-field-date-1-picker_651becd154b31'
              className='form-label'
              id='form-field-date-1-picker_651becd154b31-label'
            >
              Agreement <span className='form-required'>*</span>
            </label>
            <div className='confirmation'>
              <input
                type='checkbox'
                name='checkbox-1[]'
                value='Yes'
                id='form-field-checkbox-1-1-651becd154b31'
                aria-labelledby='form-field-checkbox-1-1-651becd154b31-label'
                data-calculation='0'
                aria-describedby='form-field-checkbox-1-651becd154b31-description'
              />
              <p>
                Yes, I agree with the{' '}
                <a href='https://diaspora.coopbankoromia.com.et/agreement/'>
                  privacy policy
                </a>{' '}
                and{' '}
                <a href='https://diaspora.coopbankoromia.com.et/agreement/'>
                  terms and conditions
                </a>
                .
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} className='form-row form-row-last'>
          <div className='form-field'>
            <button className='form-button form-button-submit' type='submit'>
              Send Enquiry
            </button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

import { FormControl, Grid, InputLabel, MenuItem } from '@mui/material';
import { Select } from '@mui/base';
import '../styles/loanForm.scss';
export interface ILoanRequestlangmProps {}

export function LoanRequestForm(props: ILoanRequestlangmProps) {
  return (
    <form className='loan-form-container'>
      <Grid container xs={12} lg={10} rowSpacing={4}>
        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='row1'>
            <Grid item xs={6} id='text-1' className='form-col form-col-6 '>
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
                  value=''
                  placeholder='Your Full Name'
                  id='form-field-text-1_651becd154b31'
                  className='form-input form-name--field'
                  data-required='1'
                />
              </div>
            </Grid>
            <Grid item xs={6} id='name-4' className='form-col form-col-6 '>
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
                  value=''
                  placeholder='Your Surname'
                  id='form-field-name-4_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={4} id='email-1' className='form-col form-col-4 '>
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
                  value=''
                  placeholder='E.g. abdi@yahoo.com'
                  id='form-field-email-1_651becd154b31'
                  className='form-input form-email--field'
                  data-required='1'
                  aria-required='true'
                />
              </div>
            </Grid>
            <Grid item xs={4} id='phone-1' className='form-col form-col-4 '>
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
                  value=''
                  placeholder='E.g. +1 300 400 5000'
                  id='form-field-phone-1_651becd154b31'
                  className='form-input form-field--phone'
                  data-required='1'
                  aria-required='true'
                />
              </div>
            </Grid>
            <Grid item xs={4} id='date-1' className='form-col form-col-4 '>
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
                  <input
                    name='date-1'
                    value='03-10-2023'
                    placeholder='Choose Date'
                    id='form-field-date-1-picker_651becd154b31'
                    className='form-input form-datepicker hasDatepicker'
                    data-required='1'
                    data-langmat='dd-mm-yy'
                    data-restrict-type='all'
                    data-restrict=''
                    data-start-year='2023'
                    data-end-year='2023'
                    data-past-dates='enable'
                    data-start-of-week='1'
                    data-start-date='2023-10-03'
                    data-end-date='2023-10-03'
                    data-start-field=''
                    data-end-field=''
                    data-start-offset=''
                    data-end-offset=''
                    data-disable-date=''
                    data-disable-range=''
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={6} id='select-3' className='form-col form-col-6 '>
              <div className='form-field'>
                <label>
                  Do you have Diaspora account?
                  <span className='form-required'> *</span>
                </label>
                <div className='select'>
                  <select>
                    <option value='Yes,-I-have.'>Yes, I do.</option>
                    <option value="No,-I-don't-Have.">No, I don't.</option>
                  </select>
                  <span>
                    <i className='fas fa-chevron-down'></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} id='html-1' className='form-col form-col-6 '>
              <div className='form-field form-merge-tags' data-field='html-1'>
                <label className='form-label'>
                  Diaspora account is required. By clicking the link below, you
                  can apply if you do not already have one.
                </label>
                <div className='call-to-action'>
                  <p>
                    <a href='https://diaspora.coopbankoromia.com.et/diaspora-current-account/'>
                      Apply for Diaspora Account Now
                    </a>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={6} id='select-6' className='form-col form-col-6 '>
              <div className='form-field'>
                <label className='form-label'>
                  Type of Account <span className='form-required'>*</span>
                </label>
                <div className='select'>
                  <select name='select-6'>
                    <option value='' data-select2-id='select2-data-10-v1mo'>
                      Type of Account
                    </option>
                    <option value='one' data-calculation='0'>
                      Diaspora Current Account (1009)
                    </option>
                    <option value='two' data-calculation='0'>
                      Diaspora Fixed-Time Deposit Account
                    </option>
                    <option
                      value='Diaspora-Non-Repatriable-Account'
                      data-calculation='0'
                    >
                      Diaspora Non-Repatriable Account (6007)
                    </option>
                    <option
                      value='Diaspora-ECOLFL-Savings-Account'
                      data-calculation='0'
                    >
                      Diaspora ECOLFL Savings Account (6008)
                    </option>
                  </select>
                  <span>
                    <i className='fas fa-chevron-down'></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} id='name-1' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  lang='form-field-name-1_651becd154b31'
                  className='form-label'
                  id='form-field-name-1_651becd154b31-label'
                >
                  Your Account Number <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-1'
                  value=''
                  placeholder='E.g. 1009xxxxxxx4191'
                  id='form-field-name-1_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={4} id='select-5' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-langm-2333__field--select-5_651becd154b31'
                  id='form-langm-2333__field--select-5_651becd154b31-label'
                  className='form-label'
                >
                  Income Source <span className='form-required'>*</span>
                </label>
                <div className='select'>
                  <select
                    id='form-langm-2333__field--select-5_651becd154b31'
                    className='form-select'
                    data-required='1'
                    name='select-5'
                    data-default-value=''
                    data-placeholder='Specify your Income Source'
                    data-search='false'
                    aria-labelledby='form-langm-2333__field--select-5_651becd154b31-label'
                    aria-describedby='form-langm-2333__field--select-5_651becd154b31-description'
                    data-select2-id='select2-data-form-langm-2333__field--select-5_651becd154b31'
                    aria-hidden='true'
                  >
                    <option value='' data-select2-id='select2-data-12-prgx'>
                      Specify your Income Source
                    </option>
                    <option value='one' data-calculation='0'>
                      Employment Letter
                    </option>
                    <option value='Two' data-calculation='0'>
                      Individual Income TAX return of three(3) years
                      consecutives
                    </option>
                    <option
                      value='Audited-financial-statement-of-at-least-recent-One(1)-year'
                      data-calculation='0'
                    >
                      Audited financial statement of at least recent One(1) year
                    </option>
                  </select>
                  <span>
                    <i className='fas fa-chevron-down'></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} id='upload-2' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-field-upload-2_651becd154b31'
                  className='form-label'
                >
                  Upload file <span className='form-required'>*</span>
                </label>
                <div
                  className='form-multi-upload '
                  data-element='upload-2_651becd154b31'
                  aria-describedby='form-field-upload-2_651becd154b31-description'
                >
                  <input
                    type='file'
                    name='upload-2[]'
                    id='form-field-upload-2_651becd154b31'
                    className='form-input-file-required do-validate form-field-upload-2_651becd154b31-2333'
                    data-method='ajax'
                    accept='.jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.css,.htm,.html,.vtt,.dfxp,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.js,.pdf,.class,.tar,.zip,.gz,.gzip,.rar,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.json,.svg,.svgz,.xml'
                    data-size='50000000'
                    data-size-message='Maximum file size allowed is 50 MB. '
                    data-filetype='jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|htm|html|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|js|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|json|svg|svgz|xml'
                    data-filetype-message='file extension is not allowed.'
                  />
                  <div className='form-multi-upload-message' aria-hidden='true'>
                    <span
                      className='form-icon-upload'
                      aria-hidden='true'
                    ></span>
                    <p>
                      Drag and Drop (or){' '}
                      <a
                        className='form-upload-file--form-field-upload-2_651becd154b31'
                        href='javascript:void(0)'
                      >
                        Choose Files
                      </a>
                    </p>
                  </div>
                </div>
                <ul className='form-uploaded-files upload-container-upload-2_651becd154b31'></ul>
              </div>
            </Grid>
            <Grid item xs={4} id='upload-1' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-field-upload-1_651becd154b31'
                  className='form-label'
                >
                  Bank Statement(Optional)
                </label>
                <div
                  className='form-multi-upload '
                  data-element='upload-1_651becd154b31'
                  aria-describedby='form-field-upload-1_651becd154b31-description'
                >
                  <input
                    type='file'
                    name='upload-1[]'
                    id='form-field-upload-1_651becd154b31'
                    className='form-input-file form-field-upload-1_651becd154b31-2333'
                    data-method='ajax'
                    accept='.jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.css,.htm,.html,.vtt,.dfxp,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.js,.pdf,.class,.tar,.zip,.gz,.gzip,.rar,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.json,.svg,.svgz,.xml'
                    data-size='50000000'
                    data-size-message='Maximum file size allowed is 50 MB. '
                    data-filetype='jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|htm|html|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|js|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|json|svg|svgz|xml'
                    data-filetype-message='file extension is not allowed.'
                  />
                  <div className='form-multi-upload-message' aria-hidden='true'>
                    <span
                      className='form-icon-upload'
                      aria-hidden='true'
                    ></span>
                    <p>
                      Drag and Drop (or){' '}
                      <a
                        className='form-upload-file--form-field-upload-1_651becd154b31'
                        href='javascript:void(0)'
                      >
                        Choose Files
                      </a>
                    </p>
                  </div>
                </div>
                <ul className='form-uploaded-files upload-container-upload-1_651becd154b31'></ul>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={6} id='name-2' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  lang='form-field-name-2_651becd154b31'
                  className='form-label'
                  id='form-field-name-2_651becd154b31-label'
                >
                  Loan amount <span className='form-required'>*</span>
                </label>
                <input
                  type='text'
                  name='name-2'
                  value=''
                  placeholder='E.g. 1,000,000.00'
                  id='form-field-name-2_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='true'
                />
              </div>
            </Grid>
            <Grid item xs={6} id='select-4' className='form-col form-col-6 '>
              <div className='form-field'>
                <label
                  lang='form-langm-2333__field--select-4_651becd154b31'
                  id='form-langm-2333__field--select-4_651becd154b31-label'
                  className='form-label'
                >
                  Repayment Schedule <span className='form-required'>*</span>
                </label>
                <div className='select'>
                  <select
                    id='form-langm-2333__field--select-4_651becd154b31'
                    className='form-select'
                    data-required='1'
                    name='select-4'
                    data-default-value=''
                    data-placeholder='Repayment Schedule'
                    data-search='false'
                    aria-labelledby='form-langm-2333__field--select-4_651becd154b31-label'
                    aria-describedby='form-langm-2333__field--select-4_651becd154b31-description'
                    data-select2-id='select2-data-form-langm-2333__field--select-4_651becd154b31'
                    aria-hidden='true'
                  >
                    <option value='' data-select2-id='select2-data-14-d1ap'>
                      Repayment Schedule
                    </option>
                    <option value='One-Month' data-calculation='0'>
                      Monthly
                    </option>
                    <option value='Three-Months' data-calculation='0'>
                      Two Months Basis
                    </option>
                    <option value='Six-Months' data-calculation='0'>
                      Three Months Basis
                    </option>
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
          <div
            role='group'
            className='form-field'
            aria-labelledby='form-checkbox-group-651becd154b31-label'
          >
            <h4
              id='form-checkbox-group-651becd154b31-label'
              className='form-label'
            >
              Recommendation: Would you recommend our product to your friends or
              relatives? If yes, please fill out the following inlangmation
              about them
            </h4>
            <label
              id='form-field-checkbox-1-1-651becd154b31-label'
              lang='form-field-checkbox-1-1-651becd154b31'
              className='form-checkbox form-checkbox-inline'
              title='Yes'
            >
              <input
                type='checkbox'
                name='checkbox-1[]'
                value='Yes'
                id='form-field-checkbox-1-1-651becd154b31'
                aria-labelledby='form-field-checkbox-1-1-651becd154b31-label'
                data-calculation='0'
                aria-describedby='form-field-checkbox-1-651becd154b31-description'
              />
              <span className='form-checkbox-box' aria-hidden='true'></span>
              <span className='form-checkbox-label'>Yes</span>
            </label>
            <label
              id='form-field-checkbox-1-2-651becd154b31-label'
              lang='form-field-checkbox-1-2-651becd154b31'
              className='form-checkbox form-checkbox-inline'
              title='Not Now'
            >
              <input
                type='checkbox'
                name='checkbox-1[]'
                value='Not-Now'
                id='form-field-checkbox-1-2-651becd154b31'
                aria-labelledby='form-field-checkbox-1-2-651becd154b31-label'
                data-calculation='0'
                aria-describedby='form-field-checkbox-1-651becd154b31-description'
              />
              <span className='form-checkbox-box' aria-hidden='true'></span>
              <span className='form-checkbox-label'>Not Now</span>
            </label>
          </div>
        </Grid>

        <Grid item xs={12} className='form-row'>
          <Grid container xs={12} columnSpacing={3} className='form-row'>
            <Grid item xs={4} id='name-3' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-field-name-3_651becd154b31'
                  className='form-label'
                  id='form-field-name-3_651becd154b31-label'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  name='name-3'
                  value=''
                  placeholder='E.g. Abdi Begna'
                  id='form-field-name-3_651becd154b31'
                  className='form-input form-name--field'
                  aria-required='false'
                />
              </div>
            </Grid>
            <Grid item xs={4} id='email-2' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-field-email-2_651becd154b31'
                  className='form-label'
                  id='form-field-email-2_651becd154b31-label'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  name='email-2'
                  value=''
                  placeholder='E.g. abdi@gmail.com'
                  id='form-field-email-2_651becd154b31'
                  className='form-input form-email--field'
                  data-required=''
                  aria-required='false'
                />
              </div>
            </Grid>
            <Grid item xs={4} id='phone-2' className='form-col form-col-4 '>
              <div className='form-field'>
                <label
                  lang='form-field-phone-2_651becd154b31'
                  className='form-label'
                  id='form-field-phone-2_651becd154b31-label'
                >
                  Phone Number
                </label>
                <input
                  type='text'
                  name='phone-2'
                  value=''
                  placeholder='E.g. +1 300 400 5000'
                  id='form-field-phone-2_651becd154b31'
                  className='form-input form-field--phone'
                  data-required=''
                  aria-required='false'
                />
              </div>
            </Grid>
          </Grid>
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

        <Grid item xs={12} className='form-row form-row-last'>
          <div className='form-field'>
            <button className='form-button form-button-submit'>Submit</button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

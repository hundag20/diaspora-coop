import { Grid } from "@mui/material";
import { TopBanner } from "../components/TopBanner";
import '../styles/getaloan.scss'

export interface IGetALoanProps {
}

const loanTypes = [{
    icon: <i aria-hidden="true" className="fas fa-home"></i>,
    title: 'Diaspora Mortgage Loan',
    desc: 'Diaspora Mortgage/ Home loan is a secured Long-Term Loans provided to Ethiopian diaspora communities to purchase or construct real estate and homes in Ethiopia. The loan product is available to eligible Ethiopian Diasporas with verifiable and steady incomes.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-MORTGAGE-LOAN-1.pdf',
},
{
    icon: <i aria-hidden="true" className="fas fa-car"></i>,
    title: 'Diaspora Non-Commercial Car Loan',
    desc: 'Diaspora Automobile Loan is a term loan granted to the Diaspora for the purpose of purchase Only new brand automobile for non-commercial purpose only.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf',
},
{
    icon: <i aria-hidden="true" className="fas fa-truck-moving"></i>,
    title: 'Diaspora Commercial Car Loan',
    desc: 'Diaspora Vehicle Loan is a term loan granted to the Diaspora for the purpose of purchase Only new brand automobile for commercial purpose only.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-AUTOMOBILE-LOAN-1.pdf',
}, {
    icon: <i aria-hidden="true" className="fas fa-user-tie"></i>,
    title: 'Diaspora Personal Loan',
    desc: 'Diaspora Personal loan is term loans granted to diaspora for the purpose of covering applicant’s urgent financial requirements, such as expenses for domestic or foreign travel, medical treatment of self or family member, education fee, or any kind of personal expenses.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-PERSONAL-LOAN.pdf',
},
{
    icon: <i aria-hidden="true" className="fas fa-city"></i>,
    title: 'Diaspora Working Capital Loan',
    desc: 'Diaspora Working Capital Loan is a loan provided to eligible Ethiopian Diasporas to finance their business’s everyday operations. These loans are used to provide the working capital that covers a Diaspora’s business short-term operational needs.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-DIASPORA-WORKING-CAPITAL-LOAN-1.pdf',
},
{
    icon: <i aria-hidden="true" className="fas fa-chart-line"></i>,
    title: 'Diaspora Investment Financing Loan',
    desc: 'Diaspora Investment Loan is a loan facility provided to eligible Ethiopian Diasporas that come with new business idea which creates jobs and economic growth back home.',
    docLink: 'https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/09/DOCUMENTS-REQUIRED-FOR-INVESTMENT-LOAN-1.pdf',
}]

export function GetALoan(props: IGetALoanProps) {
    return (
        <div className="get-a-loan">
            <TopBanner containerClass="gl hd-container" overlayClass="gl hd-background-overlay" contentClass="gl hd-content" footerClass="gl hd-footer" contentHeader="Disapora Loan" contentParagraph="Always there for your Diaspora Banking Needs!" />

            <div className="container">
                <div className="container-title">
                    <h2>
                        We offer variety of <span>loans</span>
                    </h2>
                </div>
                <Grid container columnSpacing={2} rowSpacing={4} sm={11.5} md={10}>
                    {loanTypes.map(loanItem =>
                        <Grid item className="loan-item" xs={12} sm={6}>
                            <div className="loan-item-header">
                                <div className="icon">{loanItem.icon}</div>
                                <div className="loan-item-title">
                                    <h3>
                                        {loanItem.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="loan-item-body">
                                <div className="desc">
                                    <p>
                                        {loanItem.desc}
                                        <span className="req-doc">
                                            <a href={loanItem.docLink}> Required Document</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="loan-item-footer">
                                <i className="fas fa-arrow-circle-right"></i>
                                <a href="#Loan_Request">Are You Interested?</a>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
}

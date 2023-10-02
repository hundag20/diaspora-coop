import { TopBanner } from "../components/TopBanner";
import '../styles/moneyTransfer.scss'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
export interface IMoneyTransferProps {
}

const transferAgents = [
    {
        img: '',
        link: '',
        desc: '',
    },
    {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    }, {
        img: '',
        link: '',
        desc: '',
    },

]

export function MoneyTransfer(props: IMoneyTransferProps) {
    return (<div>
        <TopBanner containerClass="mt-hd-container" overlayClass="mt-hd-background-overlay" contentClass="mt-hd-content" footerClass="mt-hd-footer" contentHeader="Money Transfer" contentParagraph="We Partner With Over 13 World Best Money Transfer Agents" />
        <div className="cards-container">
            <Grid container className="cards-grid" columnSpacing={2} rowSpacing={4} xs={9.2}>
                {transferAgents.map((agent: any, i: number) =>
                    <Grid item className="grid-item" xs={12} sm={6} md={4} >
                        <Card className='agent-card'>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={`/images/agentImage${i + 1}.jpg`}
                            ></CardMedia>
                            <div className="card-content">

                                <CardContent className="card-desc">
                                    <p>{i != 2 ? 'We help people and businesses move money for better—better communities, better economies, and a better world....' : "Banking & payments. We're here to help you transact securely and reliably, comply with regulation, improve operational efficiency and innovate at scale to serve ..."}</p></CardContent>
                                <CardActions className="card-actions">
                                    <a>Read More</a>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    </div>
    );
}

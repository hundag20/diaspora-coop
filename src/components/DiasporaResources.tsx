import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  TextField,
} from "@mui/material";
import {
  PlayLesson,
  PersonSearch,
  LocalAtm,
  Description,
  WorkspacePremium,
  OtherHouses,
  AccountBalanceWallet,
  TextFields,
} from "@mui/icons-material";
import ReadMoreButton from "./Buttons/readMoreButton";

const resources = [
  {
    icons: <AccountBalanceWallet className="muicon" />,
    title: "Foreign Exchange Rate",
    description:
      "Foreign Exchange Rate is defined as the price of the domestic currency with respect to another currency. The purpose of foreign exchange is to compare one currency with another for showing their relative values.",
    link: "https://coopbankoromia.com.et/daily-exchange-rates/",
  },
  {
    icons: <WorkspacePremium className="muicon" />,
    title: "Trade Registration and Licensing",
    description:
      "Obtaining a business license in Ethiopia. The Ministry of Trade and Industry is the main institution responsible for registering a business in Ethiopia.",
    link: "https://etrade.gov.et/",
  },
  {
    icons: <OtherHouses className="muicon" />,
    title: "National Bank Directives",
    description:
      "The National Bank of Ethiopia was established in 1963 by proclamation 206 of 1963 and began operation in January 1964. Prior to this proclamation, the Bank used to carry out dual activities, i.e. commercial banking and central banking.",
    link: "https://nbe.gov.et/directives/",
  },
];

const DiasporaResources = () => (
  <div className="whatweofferComp">
    <div className="container">
      <div className="header">
        <h3>
          Some Useful <span className="colouredspan">Diaspora</span> Resources
        </h3>
      </div>
      <div className="offers">
        {resources.map((offer) => (
          <div className="offer">
            <div className="icon">{offer.icons}</div>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
            <ReadMoreButton
              link={offer.link}
              text="Read More"
              target="_blank"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DiasporaResources;

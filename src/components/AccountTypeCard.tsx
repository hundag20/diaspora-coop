import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface CardProps {
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  active: boolean;
}

// const PricingCard= (
const AccountTypeCard: React.FC<CardProps> = ({
  title,
  description,
  benefits,
  features,
  active,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={`${active ? "active" : ""} mui-card`}
    >
      <div>
        <CardHeader title={title} className="header" />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <div className="action">
            <button>Get started</button>
          </div> */}
          {/* Read more */}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Feature:</Typography>
          <Typography paragraph>
            <ul className="section-list" style={{ padding: 0 }}>
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="feature"
                  style={{ display: "flex", alignItems: "start", gap: "10px" }}
                >
                  <span style={{ color: "#00adef" }}>
                    {typeof feature === "string" && (
                      <i className="fas fa-check-circle"> </i>
                    )}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Typography>
          <Typography paragraph>Benefit:</Typography>
          <Typography paragraph>
            <ul className="section-list" style={{ padding: 0 }}>
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="benefits"
                  style={{ display: "flex", alignItems: "start", gap: "10px" }}
                >
                  <span style={{ color: "#00adef" }}>
                    <i className="fas fa-check"> </i>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AccountTypeCard;

import React from "react";
import { Link } from "react-router-dom"

import WizardContent from "../WizardContent/WizardContent";

import classes from './WizardPage.module.scss'

const WizardPage: React.FC = () => {
  return (
    <div className={classes['wizard-wrapper']}>
      <WizardContent/>
      <Link className={classes['return-link']} to='/'>Return to main page</Link>
    </div>
  );
};

export default WizardPage;

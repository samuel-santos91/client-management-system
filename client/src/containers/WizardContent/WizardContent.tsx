import React from "react";

import NameForm from "../../components/Forms/NameForm/NameForm";
import LanguageForm from "../../components/Forms/LanguageForm/LanguageForm";
import FundingSourceForm from "../../components/Forms/FundingSourceForm/FundingSourceForm";

const WizardContent: React.FC = () => {
  return (
    <div>
      <NameForm />
      <LanguageForm />
      <FundingSourceForm />
    </div>
  );
};

export default WizardContent;

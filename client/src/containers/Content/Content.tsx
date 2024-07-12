import React from "react";

import NameForm from "../../components/NameForm/NameForm";
import LanguageForm from "../../components/LanguageForm/LanguageForm";
import FundingSourceForm from "../../components/FundingSourceForm/FundingSourceForm";

const Content: React.FC = () => {
  return (
    <div>
      <NameForm />
      <LanguageForm />
      <FundingSourceForm />
    </div>
  );
};

export default Content;

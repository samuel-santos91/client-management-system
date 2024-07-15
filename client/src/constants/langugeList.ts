// @ts-ignore
import languageList from "language-list";

interface Language {
  language: string;
  code: string;
}

interface TransformedLanguage {
  value: string;
  label: string;
}
const list = languageList();
const array = list.getData();

const listOfLanguages: TransformedLanguage[] = array.map(
  (item: Language) => ({
    value: item.language,
    label: item.language,
  })
);

export default listOfLanguages;

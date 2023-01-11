import styles from "./SearchEngine.module.scss";
import { CgSearch } from "react-icons/cg";

interface ISearchEngineProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({
  search,
  setSearch,
}: ISearchEngineProps) {
  return (
    <div className={styles.searchEngine}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}

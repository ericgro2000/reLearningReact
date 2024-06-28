import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

interface FilterState {
  sort: string;
  query: string;
}

interface PostFilterProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
}

const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Suche..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Alphabetisch sortieren nach:"
        options={[
          { value: "title", name: "Titel" },
          { value: "body", name: "Beschreibung" },
        ]}
      />
    </div>
  );
};

export default PostFilter;

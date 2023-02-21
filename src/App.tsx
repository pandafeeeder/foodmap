import groupBy from "lodash.groupby";
import { useState } from "react";
import { data, Item } from "./data";
import { Column } from "./Layout/Column";
import { Columns } from "./Layout/Columns";
import { Stack } from "./Layout/Stack";
import { Result } from "./Results/Result";

export const SPACE = "1rem";

export const App = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [results, setResults] = useState<Item[]>(data);

  const categories = groupBy(results, "category");
  const categoryKeys = Object.keys(categories).sort();

  const handleSearch = (input: string) => {
    setSearchInput(input);

    if (input === "" || input === " ") {
      setSearchInput("");
      setResults(data);
    } else {
      setResults(
        data.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  const handleClear = (key: string) => {
    if (key === "Escape") {
      setSearchInput("");
      setResults(data);
    }
  };

  return (
    <Stack>
      <input
        type={"text"}
        placeholder={"Search"}
        onChange={(event) => handleSearch(event.target.value)}
        onKeyUp={(event) => handleClear(event.key)}
        value={searchInput}
      />
      <Stack>
        {categoryKeys.map((category) => (
          <Stack key={category}>
            <h2>{category}</h2>
            <Columns>
              <Column columnWidth="47%">
                <Stack space="0.75rem">
                  <h3>{"✅ Enjoy"}</h3>
                  {categories[category]
                    .filter((c) => !c.avoid)
                    .map((c, i) => (
                      <Result key={`${c.name}-${c.avoid}-${i}`} result={c} />
                    ))}
                </Stack>
              </Column>
              <Column columnWidth="47%">
                <Stack space="0.75rem">
                  <h3>{"❌ Avoid"}</h3>
                  {categories[category]
                    .filter((c) => c.avoid)
                    .map((c, i) => (
                      <Result key={`${c.name}-${c.avoid}-${i}`} result={c} />
                    ))}
                </Stack>
              </Column>
            </Columns>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

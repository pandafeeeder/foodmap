import groupBy from "lodash.groupby";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { data, Item } from "./data";
import { GlobalStyles } from "./GlobalStyles";
import { Column } from "./Layout/Column";
import { Columns } from "./Layout/Columns";
import { Stack } from "./Layout/Stack";
import { Result } from "./Results/Result";
import { CategoryHeading } from "./Text";
import { themes } from "./theme";

export const SPACE = "1rem";

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
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
    <ThemeProvider theme={themes[darkMode ? "dark" : "light"]}>
      <GlobalStyles />
      <Stack>
        <Columns>
          <Column columnWidth="100px">{"FODMAP"}</Column>
          <Column columnWidth="90%">
            <input
              type={"text"}
              placeholder={"Search"}
              onChange={(event) => handleSearch(event.target.value)}
              onKeyUp={(event) => handleClear(event.key)}
              value={searchInput}
            />
          </Column>
          <Column columnWidth="100px">
            <input
              type={"checkbox"}
              onChange={() => setDarkMode(!darkMode)}
              checked={darkMode}
            />
            {JSON.stringify(darkMode)}
          </Column>
        </Columns>
        <Stack>
          {categoryKeys.map((category) => {
            const enjoyItems = categories[category].filter((c) => !c.avoid);
            const avoidItems = categories[category].filter((c) => c.avoid);

            return (
              <Stack key={category} space="0.5rem">
                <CategoryHeading>{category}</CategoryHeading>
                <Columns>
                  <Column columnWidth="47%">
                    <Stack space="0.75rem">
                      <Stack space="0.25rem">
                        {enjoyItems.length > 0 &&
                          enjoyItems.map((c, i) => (
                            <Result
                              key={`${c.name}-${c.avoid}-${i}`}
                              result={c}
                            />
                          ))}
                      </Stack>

                      <Stack space="0.25rem">
                        {avoidItems.length > 0 &&
                          avoidItems.map((c, i) => (
                            <Result
                              key={`${c.name}-${c.avoid}-${i}`}
                              result={c}
                            />
                          ))}
                      </Stack>
                    </Stack>
                  </Column>
                </Columns>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

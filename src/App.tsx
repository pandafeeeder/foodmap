import groupBy from "lodash.groupby";
import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { categoryEmoji, data, Item } from "./data";
import { GlobalStyles } from "./GlobalStyles";
import { Input } from "./Input";
import { Column } from "./Layout/Column";
import { Columns } from "./Layout/Columns";
import { Stack } from "./Layout/Stack";
import { Result } from "./Result";
import { CategoryHeading } from "./Text";
import { themes } from "./theme";

export const SPACE = "1rem";

const StickyHeader = styled.div`
  background-color: ${(props) => props.theme.background};
  position: sticky;
  top: 0;
  border-bottom: 2px solid black;
  padding: 0.75rem;
`;

const CategoryContainer = styled.div`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.category.background};
  border: 2px solid ${(props) => props.theme.category.border};
  border-radius: 4px;
  color: ${(props) => props.theme.category.color};
`;

const Results = styled.div`
  padding: 0.75rem;
`;

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");
  const [results, setResults] = useState<Item[]>(data);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => e.matches && setDarkMode(true));
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", (e) => e.matches && setDarkMode(false));
  }, []);

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
      <StickyHeader>
        <Input
          fullWidth
          key={"search-box"}
          onChange={(event) => handleSearch(event.target.value)}
          onKeyUp={(event) => handleClear(event.key)}
          placeholder={"Search"}
          value={searchInput}
        />
        <input
          type={"checkbox"}
          onChange={() => setDarkMode(!darkMode)}
          checked={darkMode}
        />
        {JSON.stringify(darkMode)}
        <pre>
          {'prefers-color-scheme "dark": ' +
            window.matchMedia("(prefers-color-scheme: dark)").matches}
        </pre>
      </StickyHeader>
      <Results>
        <Stack>
          {categoryKeys.map((category) => {
            const enjoyItems = categories[category].filter((c) => !c.avoid);
            const avoidItems = categories[category].filter((c) => c.avoid);

            return (
              <CategoryContainer>
                <Stack key={category} space="0.5rem">
                  <CategoryHeading>
                    <span>{category}</span>
                    <span>{categoryEmoji[category]}</span>
                  </CategoryHeading>
                  <Columns>
                    <Column columnWidth="47%" space="1rem">
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
              </CategoryContainer>
            );
          })}
        </Stack>
      </Results>
    </ThemeProvider>
  );
};

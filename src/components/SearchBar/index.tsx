import React, {useEffect, useState} from 'react';
import {
    StyledSearchBar,
    StyledInput,
    StyledButton,
    StyledListOfElements
} from "./index.styles";

type SearchBarProps = {
    cities: object[];
}

const SearchBar: React.FC<SearchBarProps> = ({cities}) => {
    const [currentText, setCurrentText] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [selectItems, setSelectedItems] = useState<string[]>([]);
    const [citiesFromJSON, setCitiesFromJSON] = useState<string[]>([]);
    // Cursor for the onKeyDown
    // [cursor, setCursor] = useState<number>(0)

    useEffect(() => {
        let tempCities: string[] = [];
        cities.map(elem => {
            // @ts-ignore
            tempCities.push(elem.city);
        })
        setCitiesFromJSON(tempCities);
    }, cities)

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let suggest: string[] = [];
        setSuggestions([]);
        const value = e.target.value;
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, `i`);

            suggest = citiesFromJSON.sort().filter(v => regex.test(v));
        }
        setSuggestions(suggest);
        setCurrentText(value);
    }

    const onHover = (element: string) => {
        setCurrentText(element);
    }

    const suggestionSelected = (element: string) => {
        setSuggestions([]);
        setCurrentText(element);
    };

    const displaySuggestion = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((elem, index) =>
                    <li
                        tabIndex={index}
                        key={index}
                        onMouseOver={() => onHover(elem)}
                        onClick={()=> suggestionSelected(elem)}>
                        {elem}
                    </li>)}
            </ul>
        );
    };

    const onSubmitClicked = (e: React.FormEvent<HTMLFormElement>) => {
        let tempSelected = selectItems;
        if (currentText) {
            tempSelected.push(currentText);
            setSelectedItems(tempSelected);
        }
        setCurrentText('');
        setSuggestions([]);
        e.preventDefault();
    }

    const closeUl = () => {
        setSuggestions([]);
    }

    return (
      <StyledSearchBar onClick={closeUl}>
        <form onSubmit={onSubmitClicked}>
            <StyledInput
                type='text'
                onChange={onTextChange}
                value={currentText}
                placeholder={'Find a place...'}
            />
            <StyledButton>Submit</StyledButton>
            {displaySuggestion()}
        </form>
          <StyledListOfElements>
              {selectItems.length > 0 ? <span className="span-title">Visited places : </span> : null}
              {selectItems.map((elem, index) => {
                  if (index === 0)
                  return <span key={index}>{elem}</span>;
                  else
                      return <span key={index}> - {elem}</span>
              })}
          </StyledListOfElements>
      </StyledSearchBar>
    );
}

export default SearchBar;

import React from "react";
import styles from "./multiselect.module.css";
import { FiSearch } from "react-icons/fi";
import { BiX } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";

const initialStateOptions = [
  { label: "رابط کاربری", value: "رابط کاربری" },
  { label: "بک اند", value: "بک اند" },
  { label: "رابط کاربری و تجربه کاربری", value: "رابط کاربری و تجربه کاربری" },
];

const MultiSelect = () => {
  const [selectedOption, setSelectOption] = useState([]);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [options, setOptions] = useState(initialStateOptions);
  const [userType, setUserType] = useState("");

  const removeTags = () => {
    setSelectOption([]);
  };

  const showOptionsHandler = () => {
    setIsShowOptions((prevState) => !prevState);
  };

  const selectedOptionHandler = (selected) => {
    setSelectOption([...selectedOption, selected]);
    setOptions(options.filter((option) => option.label !== selected.label));
  };

  const inputHandler = (e) => {
    setUserType(e.target.value);
    setOptions([...options, { label: e.target.value, value: e.target.value }]);
  };

  // Delete selected tags
  const deleteTagHandler = (deletedOption) => {
    // If deleted tag not exist in options state set to options
    options.map((option) => option.label !== deletedOption.label && setOptions([...options, deletedOption]));
    // Delete tag from selectedOtion state
    const deletedTage = selectedOption.filter((option) => option.label !== deletedOption.label);
    setSelectOption(deletedTage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.multi_tags}>
        <span className={styles.search_icon}>
          <FiSearch />
        </span>
        <div className={styles.selected_tags}>
          {/* If selected tag didn't exist , dispaly <input /> Else dispaly selected tag */}
          {selectedOption.length > 0 &&
            selectedOption.map((option) => (
              <div className={styles.selected_tag} key={option.label}>
                <p className={styles.selected_tag_title}> {option.label}</p>
                <button type='button' className={styles.delete_tag} onClick={() => deleteTagHandler(option)}>
                  <BiX />
                </button>
              </div>
            ))}
          <input type='text' className={styles.input_tags} value={userType} onChange={inputHandler} />
        </div>

        {selectedOption.length > 0 && (
          <button type='button' className={styles.close_values} onClick={removeTags}>
            <BiX />
          </button>
        )}

        <button
          type='button'
          className={`${styles.caret_icon} ${isShowOptions && styles.animation}`}
          onClick={() => showOptionsHandler()}
        >
          <AiOutlineCaretDown />
        </button>
      </div>

      {isShowOptions && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.label} className={styles.option} onClick={() => selectedOptionHandler(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;

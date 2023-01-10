import React from "react";
import commentsStyles from "./commentsStyles.module.css";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { format } from "date-fns";
import formStyles from "./formStyles.module.css";

export function Guestbook() {
  const [guestBook, setGuestBook] = useLocalStorage("guestBook", []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setGuestBook((prev) => {
      return [
        ...prev,
        {
          firstName,
          lastName,
          comment,
          ts: Date.now(),
        },
      ];
    });
    setFirstName("");
    setLastName("");
    setComment("");
  }

  return (
    <div className={formStyles.flexSection}>
      <form onSubmit={handleSubmit}>
        <input
          className={formStyles.infoContainer}
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
          value={firstName}
        />
        <input
          className={formStyles.infoContainer}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          value={lastName}
        />
        <textarea
          value={comment}
          className={formStyles.textBox}
          placeholder="leave a christmas greeting"
          onChange={(e) => setComment(e.target.value)}
          name="comment"
        />

        <br />
        <button className={formStyles.submitBtn}>Submit</button>
      </form>

      <div className="book">
        {guestBook.map((guestBookEntry) => (
          <div className={commentsStyles.commPost}>
            <h1 className={commentsStyles.writeCom}>
              Navn: {guestBookEntry.firstName} {guestBookEntry.lastName}
            </h1>

            <h3 className={commentsStyles.kommentar}>
              {guestBookEntry.comment}
            </h3>
            <p className={commentsStyles.dmy}>
              {format(guestBookEntry.ts, "dd/MM/yyyy")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

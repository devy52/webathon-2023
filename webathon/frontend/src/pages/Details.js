import React from "react";
import { useLocation } from "react-router-dom";

function IdeaDetails() {
  const location = useLocation();
  const idea = location.state;

  return (
    <div>
      <h1>{idea.startupIdea}</h1>
      <p>{idea.shortDescription}</p>
      <p>Email: {idea.contactDetails.email}</p>
      <p>Phone: {idea.contactDetails.phone}</p>
    </div>
  );
}

export default IdeaDetails;

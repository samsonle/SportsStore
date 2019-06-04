export const GetMessages = elem => {
  const messages = [];
  if (elem.validity.valueMissing) {
    messages.push("Value required");
  }
  if (elem.validity.typeMissmatch) {
    messages.push(`Invalid ${elem.type}`);
  }
  return messages;
};

const dataRecordWrapper = (daoFunction, throwError, recordNumber) => {
  const isRecorded = daoFunction === recordNumber;
  if (!isRecorded) {
    throw throwError;
  }
};

export { dataRecordWrapper };

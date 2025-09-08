import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { ErrorMesagges } from '../types/enums';

type Props = {
  errorMessage: ErrorMesagges;
  setErrorMessage: (value: ErrorMesagges) => void;
};

const ErrorNotifacations: React.FC<Props> = ({
  errorMessage,
  setErrorMessage,
}) => {
  const [isCloseNotification, setIsCloseNotification] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage(ErrorMesagges.defaultValue);
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMessage, setErrorMessage]);

  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !errorMessage || isCloseNotification,
      })}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setIsCloseNotification(true)}
      />

      {errorMessage}
    </div>
  );
};

export default ErrorNotifacations;

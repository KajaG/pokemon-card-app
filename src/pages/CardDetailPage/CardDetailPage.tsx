import React from "react";
import { useSearchParams } from "react-router-dom";
import { CardDetail } from "../../components/CardDetail";

export const CardDetailPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const monName = searchParams.get("name");

  if (!monName) return null;
  return (
    <>
      <CardDetail monName={monName} />
    </>
  );
};

import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "components/Button";
import { FC } from "react";
import { CountryDetails } from "feature/details/CountryDetails";

interface DetailsProps {}

export const Details: FC<DetailsProps> = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  );
};

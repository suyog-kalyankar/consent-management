import { Grid, Pagination, PaginationItem, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import DataTable from "../../components/data-table/data-table";
import { useDispatch, useSelector } from "react-redux";
import { getConsents } from "../../store/consent-store/actions";
import {
  ALL_CONSENTS,
  LOADING,
  NO_DATA_AVAILABLE,
} from "../../constants/app-constants";

const Consents = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 2;
  const dispatch = useDispatch();

  // sets new page number on page change
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getConsents());
  }, [dispatch]);

  const { consents, loadingConsent } = useSelector(
    (state) => state.ConsentReducer
  );

  // returns total number of pages on the basis of total consents and rows per page
  const totalPageNo = useMemo(() => {
    const quotient = consents?.length / rowsPerPage;
    if (Number.isInteger(quotient)) {
      return quotient;
    } else {
      return Math.floor(quotient) + 1;
    }
  }, [consents?.length]);

  return !loadingConsent ? (
    consents?.length > 0 ? (
      <Grid
        container
        justifyContent="center"
        spacing={4}
        flexDirection="column"
      >
        <Grid item>
          <Typography sx={{ color: "darkgrey" }}>{ALL_CONSENTS}</Typography>
        </Grid>
        <Grid item>
          <DataTable rows={consents} page={page} rowsPerPage={rowsPerPage} />
          <Pagination
            aria-label="table-pagination"
            page={page}
            count={totalPageNo}
            shape="rounded"
            color="primary"
            boundaryCount={2}
            sx={{ mt: 1 }}
            showFirstButton
            showLastButton
            onChange={handleChangePage}
            renderItem={(item) => {
              return (
                <PaginationItem type={"start-ellipsis"} selected {...item} />
              );
            }}
          />
        </Grid>
      </Grid>
    ) : (
      <Typography sx={{ color: "black" }}>{NO_DATA_AVAILABLE}</Typography>
    )
  ) : (
    <Typography>{LOADING}</Typography>
  );
};

export default Consents;

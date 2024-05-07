import { Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import OutlineInput from "../../components/OutlineInput";
import OutlineSelect from "../../components/OutlineSelect";
import FlexBox from "../../components/FlexBox";
import FlexLabel from "../../components/FlexLabel";
import PrimaryButton from "../../components/PrimaryButton";
import FlexBetween from "../../components/FlexBetween";

const CallingSearch = () => {
  return (
    <Box bgcolor="darkPallete.grey" borderRadius={3} p={2}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 20 }}
        mb={3}
      >
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Thời điểm gọi</FlexLabel>
            <OutlineInput id="my-input" placeholder="Nhập số điện thoại" />
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Cuộc gọi chuyển máy</FlexLabel>
            <OutlineSelect id="my-input" placeholder="" displayEmpty>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </OutlineSelect>
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">
              Thời gian xử lý cuộc gọi(s)
            </FlexLabel>
            <OutlineSelect id="my-input" placeholder="" displayEmpty>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </OutlineSelect>
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Loại cuộc gọi</FlexLabel>
            <OutlineSelect id="my-input" placeholder="" displayEmpty>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </OutlineSelect>
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Thuê bao gọi</FlexLabel>
            <OutlineInput id="my-input" placeholder="Nhập số điện thoại" />
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Thuê bao đến</FlexLabel>
            <OutlineInput id="my-input" placeholder="Nhập số điện thoại" />
          </FlexBox>
        </Grid>
        <Grid item xs={6}>
          <FlexBox>
            <FlexLabel htmlFor="my-input">Tổng đài</FlexLabel>
            <OutlineSelect id="my-input" placeholder="" displayEmpty>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </OutlineSelect>
          </FlexBox>
        </Grid>
      </Grid>

      <Box width="100%">
        <FlexBetween>
          <FlexBetween width="33%">
            <PrimaryButton>Tải về</PrimaryButton>
            <PrimaryButton>Tải về tất cả</PrimaryButton>
          </FlexBetween>
          <PrimaryButton>Tìm kiếm</PrimaryButton>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default CallingSearch;

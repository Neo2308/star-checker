import {
  Box, Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem, OutlinedInput,
  Rating,
  Select,
  Typography
} from "@mui/material";
import React, {useMemo, useState} from "react";
import {Data, Library} from "../data";

export function Form({category, onSubmit, onSelectCategory}: {
  category?: Data,
  onSubmit: (data: string) => void,
  onSelectCategory: (index: string) => void
}) {
  const [year, setYear] = useState<string>('')
  const [rating, setRating] = useState(-2)

  const rating_years = useMemo(() => {
    return category?.years.map(yearInfo => yearInfo.year) ?? []
  }, [category])

  return (
    category === undefined ?
      <>
        <Typography variant="body1" gutterBottom>
          Select the category of your appliance:
        </Typography>
        <FormControl fullWidth required>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            name="category"
            value={''}
            input={<OutlinedInput label="Category"/>}
            onChange={(event) => {
              onSelectCategory(event.target.value)
            }}
            fullWidth
          >
            {Library.map((value) =>
              (<MenuItem key={value.title} value={value.title}>{value.title}</MenuItem>)
            )}
          </Select>
        </FormControl>
      </>
      :
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="body1" gutterBottom>
              Category: <em>{category?.title}</em>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="rating-year-label">Rating year</InputLabel>
              <Select
                name="rating-year"
                value={year}
                input={<OutlinedInput label="Rating year"/>}
                onChange={(event) => {
                  setYear(event.target.value)
                }}
                fullWidth
              >
                {rating_years.map((value) =>
                  (<MenuItem key={value} value={value}>{value}</MenuItem>)
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography component="legend" variant="overline">BEE Rating</Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue ?? 0);
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            onClick={() => {
              console.log(year, rating)
              onSubmit(JSON.stringify({year, rating}))
            }}
            sx={{mt: 3, ml: 1}}
          >
            Submit
          </Button>
        </Box>
      </>
  );
}
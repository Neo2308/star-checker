import {Container, Paper, Typography} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {Form} from "./Form";
import {Data, Library} from "../data";
import jsonata from "jsonata";
import Divider from '@mui/material/Divider'
import {Footer} from "./Footer";

export function FormWrapper() {
  const [category, setCategory] = useState<Data>();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState('')
  const [response, setResponse] = useState('')

  const handleSetCategory = (input: string) => {
    setCategory(Library.find(category => category.title === input))
  }
  const handleSubmit = (input: string) => {
    setSubmitted(true);
    setData(input)
  };
  const structuredData = useCallback(() => {
    return JSON.parse(data) as { year: string; rating: number }
  }, [data])
  const updateResponse = useCallback(() => {
    const {year, rating} = structuredData()
    jsonata(category?.years.find(yearInfo => yearInfo.year === year)?.conversion ?? "$").evaluate({rating: rating}, {}, (error, result) => {
      if (error) {
        console.error(error);
        return;
      }
      setResponse(result)
    });
  }, [category, structuredData])
  useEffect(() => {
    if (data !== '') {
      updateResponse()
    }
  }, [data, updateResponse])

  return <Container component="main" maxWidth="sm" sx={{mb: 4}}>
    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Star Checker
      </Typography>
      <Divider/>
      <div style={{marginTop: "24px"}}>
        {submitted ? (
          <>
            <Typography variant="subtitle1">
              {`Your updated rating as of ${category?.years.find(yearInfo => yearInfo.year === structuredData().year)?.toYear} is ` + (response === '' ? 'being processed' : response)}
            </Typography>
          </>
        ) : (
          <Form category={category} onSubmit={handleSubmit} onSelectCategory={handleSetCategory}/>
        )}
      </div>
    </Paper>
    <Footer/>
  </Container>
}

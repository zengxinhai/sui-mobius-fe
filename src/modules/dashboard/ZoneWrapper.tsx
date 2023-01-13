import { Paper, Typography } from '@mui/material'
import React from "react";

type Props = React.PropsWithChildren & {
  title: string
}
export const ZoneWrapper: React.FC<Props> = ({title, children}) => {
  return (
    <Paper style={{ padding: '20px' }}>
      <Typography fontSize={18}>
        {title}
      </Typography>
      {children}
    </Paper>
  )
}

import React, { useState } from 'react';
import { Button, TextField, Tooltip, Stack } from "@mui/material";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import theme from '../../theme';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Tooltip title="Decrement value">
          <Button
            variant="contained"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </Tooltip>
        <span>{count}</span>
        
        <Tooltip title="Increment value">
          <Button
            variant="contained"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </Tooltip>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Tooltip title="Set increment amount">
          <TextField
            variant="outlined"
            label="Amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Tooltip>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Button>
      </Stack>
    </div>
  );
}

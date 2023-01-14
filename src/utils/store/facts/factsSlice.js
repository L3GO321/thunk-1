import { createSlice } from '@reduxjs/toolkit';

const facts = [
  'прообразом Чубакки стал пёс режиссёра',
  'актёрам разрешили подобрать любимый цвет для своих световых мечей',
  'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
  'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
  'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
]

export const factsSlice = createSlice({
  name: 'facts',
  initialState: [],

  reducers: {
    changeCount: {
      reducer: (state, action) => facts.slice(0, action.payload),
      prepare: (value) => ({ payload: Number(value) }),
    }
  },
});

export const { changeCount } = factsSlice.actions;

export default factsSlice.reducer;

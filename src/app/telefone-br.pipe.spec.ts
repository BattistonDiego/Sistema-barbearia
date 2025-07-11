import { TelefoneBrPipe } from './pipes/telefone-br.pipe';

describe('TelefoneBrPipe', () => {
  it('create an instance', () => {
    const pipe = new TelefoneBrPipe();
    expect(pipe).toBeTruthy();
  });
});

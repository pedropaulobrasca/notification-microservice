import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Voce recebou uma solicitacao de amizade.');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Should not be able to create a notification content with more than 250 characteres', () => {
    expect(() => new Content('a'.repeat(251))).toThrow();
  });
});

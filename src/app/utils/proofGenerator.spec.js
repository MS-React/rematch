import { createProof } from './proofGenerator';

describe('proofGenerator', () => {
  let mathApi;

  beforeAll(() => {
    mathApi = global.Math;
    const mockMath = Object.create(global.Math);
    mockMath.floor = () => 1;
    global.Math = mockMath;
  });

  afterAll(() => {
    global.Math = mathApi;
  });

  describe('createProof', () => {
    let proof;

    beforeEach(() => {
      proof = createProof();
    });

    it('should create a random aritmetic basic math proof and return the equation in a string and the result', () => {
      expect(proof).toEqual(expect.objectContaining({
        equation: '1 - 1',
        result: 0,
      }));
    });
  });
});

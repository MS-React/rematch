import { init } from "@rematch/core";
import game from "./game";

describe("Game model", () => {
  let store;

  beforeAll(() => {
    store = init({
      models: { game }
    });
  });

  describe("incrementScore", () => {
    it("should update the score in the state", () => {
      store.dispatch.game.incrementScore(10);

      const gameState = store.getState().game;
      expect(gameState.score).toBe(10);
    });
  });

  describe("incrementSuccess", () => {
    it("should update the proofs successfuls in the state", () => {
      store.dispatch.game.incrementSuccess();

      const gameState = store.getState().game;
      expect(gameState.success).toBe(1);
    });
  });

  describe("incrementFails", () => {
    it("should update the proofs failed in the state", () => {
      store.dispatch.game.incrementFails();

      const gameState = store.getState().game;
      expect(gameState.fails).toBe(1);
    });
  });

  describe("proofsLeft", () => {
    it("should update the proofs lefts in the state", () => {
      const initialTotalProofs = store.getState().game.totalProofs;
      store.dispatch.game.proofsLeft();

      const gameState = store.getState().game;
      const expectedTotalProofs = initialTotalProofs - 1;
      expect(gameState.totalProofs).toBe(expectedTotalProofs);
    });
  });

  describe("setPlayer", () => {
    it("should update player name in the state", () => {
      store.dispatch.game.setPlayer("John Doe");

      const gameState = store.getState().game;
      expect(gameState.player.name).toBe("John Doe");
    });
  });

  describe("resumeAndPause", () => {
    it("should update playing status in the state", () => {
      const currentPlayingStatus = store.getState().game.playing;
      store.dispatch.game.resumeAndPause();

      const gameState = store.getState().game;
      expect(gameState.playing).toBe(!currentPlayingStatus);
    });
  });

  describe("startGame", () => {
    it("should update the started status in the state", () => {
      store.dispatch.game.startGame();

      const gameState = store.getState().game;
      expect(gameState.started).toBeTruthy();
    });
  });
});
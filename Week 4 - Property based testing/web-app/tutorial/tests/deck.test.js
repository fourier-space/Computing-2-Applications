import fc from "fast-check";
import property from "./property.js";
import FP from "../functional.js";
import Deck from "../deck.js";

/** Arbitrary for a 52-card deck
 * shuffled using the Fisher-Yates algorithm */
const arbitrary_shuffled_deck = fc.tuple(
    ...FP.sequence(52).map((n) => fc.nat(51 - n))
).map(function (positions) {
    return positions.reduce(function (accumulator, position) {
        const [old_deck, new_deck] = accumulator;
        return Deck.pick(position)(old_deck, new_deck);
    }, [Deck.new_deck(), Deck.new_pile()])[1].reverse();
});

describe("Faro Out-shuffle", function () {

    property(
        "Given a deck; " +
        "When a Faro out-shuffle is performed; " +
        "Then the shuffled deck contains the same cards as the original deck.",
        [arbitrary_shuffled_deck],
        function (deck) {
            const faro_shuffled = Deck.faro_out_shuffle(deck);

            const deck_numbers = deck.map(Deck.card_number).sort();
            const shuffled_numbers = faro_shuffled.map(Deck.card_number).sort();

            return deck_numbers.every(
                (card_number, i) => card_number === shuffled_numbers[i]
            ) && (deck_numbers.length === shuffled_numbers.length);
        }
    );

    property(
        "Given a deck; " +
        "When a Faro out-shuffle is performed; " +
        "Then the top card of the original deck is the same " +
        "as the top card of the shuffled deck.",
        [arbitrary_shuffled_deck],
        function (deck) {
            const faro_shuffled = Deck.faro_out_shuffle(deck)
            return Deck.cards_equal(deck[0], faro_shuffled[0]);
        }
    );

    property(
        "Given a deck of 52 cards; " +
        "When sequential Faro out-shuffles are performed; " +
        "Then the original deck is returned after exactly 8 shuffles",
        [arbitrary_shuffled_deck],
        function (deck) {
            let times_shuffled = 0;
            let shuffle_deck = deck;
            while (times_shuffled < 8) {
                shuffle_deck = Deck.faro_out_shuffle(shuffle_deck);
                times_shuffled += 1;

                const matches = Deck.decks_equal(deck, shuffle_deck);

                if (matches && times_shuffled !== 8) {
                    return false;
                }

                if (matches && times_shuffled === 8) {
                    return true;
                }
            }
            return false;
        }
    );

});

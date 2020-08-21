import { Arbitrary } from './definition/Arbitrary';
/**
 * For date between constraints.min or new Date(-8640000000000000) (included) and constraints.max or new Date(8640000000000000) (included)
 *
 * @param constraints
 */
export declare function date(constraints?: {
    min?: Date;
    max?: Date;
}): Arbitrary<Date>;

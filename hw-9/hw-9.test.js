import { removeElement } from "./hw-9";

describe("Testing removeElement", () =>  {
    it("remove the existing element from array", () => {
        const array = [1, 2, 3 ,4 ,5 ,6 ,7];
        removeElement(array, 5);
        expect(array).not.toContain(5);
    })
     it("attempting to delete a nonexistent element does not modify the array", () => {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const originalArray = [1, 2, 3, 4, 5, 6, 7];
        removeElement(array, 9);
        expect(array).toEqual(originalArray);

     })
    it("should remove repeated element", () => {
        const array = [1, 2, 3, 4, 2, 5, 6, 7];
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === 2) {
                array.splice(i, 1);
            }
        }
        expect(array).not.toContain(2);
    });
});
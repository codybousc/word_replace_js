
describe('wordReplace', function() {
  it("remove's a user provided word from a user provided sentence", function() {
    expect(wordReplace("Tbone walks on water", "water", "")).to.equal("Tbone walks on ");
  });

  it("replaces a user provided word in a user provided sentence", function() {
    expect(wordReplace("Tbone walks on soil", "soil", "water")).to.equal("Tbone walks on water");
  });

  it("replaces a user provided word regardless of capitalization", function() {
    expect(wordReplace("Tbone walks on land", "Land", "water")).to.equal("Tbone walks on water");
  });

  it("capitalizes the first letter of a sentence regardless of how it was entered", function() {
    expect(wordReplace("tbone walks on land", "land", "water")).to.equal("Tbone walks on water");
  });

});

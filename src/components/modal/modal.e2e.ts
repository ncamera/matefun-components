import { newE2EPage } from "@stencil/core/testing";

describe("modal", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<matefun-modal></matefun-modal>");
    const element = await page.find("modal");
    expect(element).toHaveClass("hydrated");
  });
});

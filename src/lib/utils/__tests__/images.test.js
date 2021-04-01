import { expect, test } from "@jest/globals";
import { fixImageUrl } from "../images";

test('fixImageUrl changes a solo width parameter', () => {
  const originalUrl = "https://images.unsplash.com/hashbang?w=1200"
  const fixedUrl = fixImageUrl(originalUrl, 400)

  expect(fixedUrl).toEqual("//images.unsplash.com/hashbang?w=400")
});

test('fixImageUrl fixes width if param is missing', () => {
  const originalUrl = "https://images.unsplash.com/hashbang?q=auto"
  const fixedUrl = fixImageUrl(originalUrl, 400)

  expect(fixedUrl).toEqual("//images.unsplash.com/hashbang?w=400&q=auto")
})

test('fixImageUrl fixes width with multiple params', () => {
  const originalUrl = "https://images.unsplash.com/hashbang?q=auto&w=1200"
  const fixedUrl = fixImageUrl(originalUrl, 400)

  expect(fixedUrl).toEqual("//images.unsplash.com/hashbang?q=auto&w=400")
})

test('fixImageUrl supports options hash', () => {
  const originalUrl = "https://images.unsplash.com/hashbang?q=auto&w=1200"
  const fixedUrl = fixImageUrl(originalUrl, {width: 400})

  expect(fixedUrl).toEqual("//images.unsplash.com/hashbang?q=auto&w=400")
})
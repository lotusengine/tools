import { Stack } from '@lotusengine/typings';

// Default export should export a valid Stack
export default async () => {

  const helloWorldStack: Stack = {
    service: {
      id: 'helloWorldService',
      data: {
      }
    }, workflows: [], collections: [], views: []
  }

  return helloWorldStack
}

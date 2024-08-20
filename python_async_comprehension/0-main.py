#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    """Collects and prints values from async_generator using an async comprehension."""
    result = [i async for i in async_generator()]
    print(result)

asyncio.run(print_yielded_values())

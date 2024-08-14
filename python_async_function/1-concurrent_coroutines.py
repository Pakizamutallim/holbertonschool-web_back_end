#!/usr/bin/env python3
import asyncio
from typing import List
from 0_basic_async_syntax import wait_random  # Adjust the import as necessary

async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Executes wait_random n times concurrently with the specified max_delay,
    and returns a list of all the delays in ascending order.

    Args:
        n (int): The number of times to run wait_random.
        max_delay (int): The maximum delay to pass to wait_random.

    Returns:
        List[float]: A list of delays in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    
    return delays

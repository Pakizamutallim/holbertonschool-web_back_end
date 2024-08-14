#!/usr/bin/env python3
"""
This is a function
"""


import asyncio
import importlib.util
from typing import List


module_name = '0-basic_async_syntax'
module_spec = importlib.util.find_spec(module_name)
module = importlib.util.module_from_spec(module_spec)
module_spec.loader.exec_module(module)

wait_random = module.wait_random


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
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)

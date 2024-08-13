#!/usr/bin/env python3
"""
This module provides a type-annotated function that returns the floor of a float.
"""


import math


def floor(n: float) -> int:
    """
    Returns the floor of the given float number.

    Parameters:
    n (float): The number to be floored.

    Returns:
    int: The floor of the given float.
    """
    return math.floor(n)

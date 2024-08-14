#!/usr/bin/env python3
"""
This is a type-annotated function sum_mixed_list
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Sums all the elements floats and returns the result as a float.

    Args:
        mxd_lst: A list containing integers and/or floats.

    Returns:
        float: The sum of all elements in the list.
    """
    return float(sum(mxd_lst))

#!/usr/bin/env python3
""" Simple helper function """


def index_range(page, page_size):
    """ return a tuple of size two containing a start index and an end index
        corresponding to the range of indexes to return in a list for those
        particular pagination parameters. """
    if page and page_size:
        index = page * page_size - page_size
        index_1 = index + page_size
        return (index, index_1)
